<template>

</template>

<script>


    export default {
        name: "animated-sprite",
        props:['canvas'],
        created(){

            fabric.Sprite = fabric.util.createClass(fabric.Image, {

                type: 'sprite',

                spriteWidth: 50,
                spriteHeight: 72,
                spriteIndex: 0,
                frameTime: 100,

                initialize: function(element, options) {
                    options || (options = { });

                    options.width = this.spriteWidth;
                    options.height = this.spriteHeight;

                    this.callSuper('initialize', element, options);

                    this.createTmpCanvas();
                    this.createSpriteImages();
                },

                createTmpCanvas: function() {
                    this.tmpCanvasEl = fabric.util.createCanvasElement();
                    this.tmpCanvasEl.width = this.spriteWidth || this.width;
                    this.tmpCanvasEl.height = this.spriteHeight || this.height;
                },

                createSpriteImages: function() {
                    this.spriteImages = [ ];

                    var steps = this._element.width / this.spriteWidth;
                    for (var i = 0; i < steps; i++) {
                        this.createSpriteImage(i);
                    }
                },

                createSpriteImage: function(i) {
                    var tmpCtx = this.tmpCanvasEl.getContext('2d');
                    tmpCtx.clearRect(0, 0, this.tmpCanvasEl.width, this.tmpCanvasEl.height);
                    tmpCtx.drawImage(this._element, -i * this.spriteWidth, 0);

                    var dataURL = this.tmpCanvasEl.toDataURL('image/png');
                    var tmpImg = fabric.util.createImage();

                    tmpImg.src = dataURL;

                    this.spriteImages.push(tmpImg);
                },

                _render: function(ctx) {
                    ctx.drawImage(
                        this.spriteImages[this.spriteIndex],
                        -this.width / 2,
                        -this.height / 2
                    );
                },

                play: function() {
                    var _this = this;
                    this.animInterval = setInterval(function() {

                        _this.onPlay && _this.onPlay();
                        _this.dirty = true;
                        _this.spriteIndex++;
                        if (_this.spriteIndex === _this.spriteImages.length) {
                            _this.spriteIndex = 0;
                        }
                    }, this.frameTime);
                },

                stop: function() {
                    clearInterval(this.animInterval);
                }
            });

            fabric.Sprite.fromURL = function(url, callback, imgOptions) {
                fabric.util.loadImage(url, function(img) {
                    callback(new fabric.Sprite(img, imgOptions));
                });
            };

            fabric.Sprite.async = true;
        },
        mounted(){
            var canvas = this.canvas;
            fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
            fabric.Object.prototype.transparentCorners = false;

            for (var i = 0, len = 5; i < len; i++) {
                for (var j = 0, jlen = 5; j < jlen; j++) {
                    fabric.Sprite.fromURL('/public/sprite.png', createSprite(i, j));
                }
            }

            function createSprite(i, j) {
                return function(sprite) {
                    sprite.set({
                        left: i * 100 + 50,
                        top: j * 100 + 50,
                        angle: fabric.util.getRandomInt(-30, 30)
                    });
                    canvas.add(sprite);
                    setTimeout(function() {
                        sprite.set('dirty', true);
                        sprite.play();
                    }, fabric.util.getRandomInt(1, 10) * 100);
                };
            }

            (function render() {
                canvas.renderAll();
                fabric.util.requestAnimFrame(render);
            })();

        }
    }
</script>

<style scoped>

</style>
