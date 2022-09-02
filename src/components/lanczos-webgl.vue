<template>
        <div>

            <pre id="log">

            </pre>

            <div>
                <canvas id="c" width="400" height="400" style="border:1px solid #ccc"></canvas>
                <canvas id="b" width="400" height="400" style="border:1px solid #ccc"></canvas>
            </div>

        </div>
</template>

<script>
    export default {
        name: "lanczos-webgl",
        props: ['canvas'],
        mounted() {
            let canvas1 = document.getElementById('c');
            let canvas2 = document.getElementById('b');
            let ctx = canvas1.getContext('2d');
            let ctx2 = canvas2.getContext('2d');
            ctx.imageSmoothingEnabled = false;
            ctx2.imageSmoothingEnabled = false;

            let canvas = this.canvas;
            canvas.set('imageSmoothingEnabled', false)
            canvas.set('enableRetinaScaling', false)
            canvas.set('fireRightClick', true)
            canvas.set('stopContextMenu', true)

            let lanczosFilter = new fabric.Image.filters.Resize({
                scaleX: 1,
                scaleY: 1,
                resizeType: 'lanczos',
                lanczosLobes: 3,
            });

            let oImg;
            let p = {
                x: 0,
                y: 0,
            };

            fabric.Image.fromURL('/public/dragon.jpg', function(img) {
                img.set({ left: 0, top: 0}).scale(0.2);
                canvas.backgroundImage = img;
            });

            fabric.Image.fromURL('/public/dragon.jpg', function(img) {
                let r = canvas.getRetinaScaling();
                oImg = img.set({ left: 400, top: 250}).scale(0.2);
                lanczosFilter.scaleX = lanczosFilter.scaleY = oImg.scaleX * r;
                oImg.lockScalingFlip = true;
                oImg.minScaleLimit = 0.025;
                oImg.padding = 5;
                oImg.filters = [lanczosFilter];
                oImg.hoverCursor = 'crossHair';
                oImg.on('scaling', function(opt) {
                    let filters = [];
                    let sX = Math.abs(this.scaleX) * r, sY = Math.abs(this.scaleY) * r;
                    if (sX > 0.01 && sY > 0.01 && sX < 1 && sY < 1) {
                        if (sX <= 0.2 || sY <= 0.2) {
                            lanczosFilter.lanczosLobes = 2;
                        } else if (sX <= 0.05 || sY <= 0.05) {
                            lanczosFilter.lanczosLobes = 1;
                        } else {
                            lanczosFilter.lanczosLobes = 3;
                        }
                        lanczosFilter.scaleX = sX;
                        lanczosFilter.scaleY = sY;
                        filters.push(lanczosFilter);
                    }
                    this.filters = filters;
                });
                oImg.on('mousedown', function(opt) {
                    if (opt.button === 3) {
                        p = oImg.getLocalPointer(opt.e);
                        p.x /= lanczosFilter.scaleX;
                        p.y /= lanczosFilter.scaleY;
                        updateFor(lanczosFilter.scaleX, lanczosFilter.scaleY)
                    }
                })
                canvas.add(oImg);
                canvas.setActiveObject(oImg);
                canvas.on('before:render', function() {
                    canvas.backgroundImage.scaleX = oImg.scaleX;
                    canvas.backgroundImage.scaleY = oImg.scaleY;
                    oImg.applyFilters();
                    updateFor(oImg.scaleX, oImg.scaleY);
                    document.getElementById('log').innerHTML = 'scale: ' + lanczosFilter.scaleX.toFixed(4) + ' lobes: ' + lanczosFilter.lanczosLobes +
                        ', taps: ' + lanczosFilter.taps.length + '\nweights:\n' + lanczosFilter.taps.map(
                            function(tap, i) { return i + ': ' + tap.toFixed(7); }
                        ).join('\n');
                });
            });


            function updateFor(valueX, valueY) {
                let w = oImg._element.width, h = oImg._element.height,
                    sx = p.x * valueX, sy = p.y * valueY, fW = Math.floor(550 * valueX),
                    fH = Math.floor(400 * valueY);
                if (sx + fW > w) {
                    sx = w - fW;
                }
                if (sy + fH > h) {
                    sy = h - fH;
                }
                ctx.drawImage(oImg._originalElement, sx / valueX, sy / valueY, 550, 400, 0, 0, 550 * valueX , 400 * valueY);
                ctx.drawImage(canvas1, 0, 0, fW, fH, 0, 0, 550, 400);
                ctx2.drawImage(oImg._element, sx, sy, fW, fH, 0, 0, 550, 400);
            }
        }
    }
</script>

<style scoped>

</style>
