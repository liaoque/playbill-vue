<template>
    <div class="controls">
        <p>
            Font-family: <select id="font-family"></select>
        </p>
    </div>
</template>

<script>
    import FontFaceObserver from 'fontfaceobserver'
    export default {
        name: "loadfonts",
        props: ['canvas'],
        mounted() {

            /*

            https://github.com/bramstein/fontfaceobserver
            字体加载器


            When working with custom fonts on a fabric canvas, it is recommended to
            use a font preloader. Not doing so is likely to cause texts that are
            imported onto the canvas to be rendered with a wrong (default) font. It
            can also cause you to see a FOUT (Flash of Unstyled Text) right after
            changing the font of a text. The reason behind this is that the browser
            will only load a font after it is used in the DOM. Preloading fonts
            prevents this from happening. In this example we are using Font Face
            Observer (https://github.com/bramstein/fontfaceobserver) to preload
            Google Fonts, using the following steps:

            - Add the custom fonts using @import in your CSS
            - Make an array containing the names of all the custom fonts
            - Load all the custom fonts using a promise or load them by request
            - When the promise is fulfilled, initialize the fabric canvas

            */

            var canvas = this.canvas;
// Define an array with all fonts
            var fonts = [
                "observer-test1", "unknown", "observer-test3", "observer-test4","observer-test5",
                "observer-test6", "observer-test7", "observer-test8", "Trebuchet W01 Regular","Neue Frutiger 1450 W04"
            ];

            var textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
                left: 50,
                top: 50,
                width: 150,
                fontSize: 20
            });
            canvas.add(textbox).setActiveObject(textbox);
            fonts.unshift('Times New Roman');
// Populate the fontFamily select
            var select = document.getElementById("font-family");
            fonts.forEach(function (font) {
                var option = document.createElement('option');
                option.innerHTML = font;
                option.value = font;
                select.appendChild(option);
            });

// Apply selected font on change
            document.getElementById('font-family').onchange = function () {
                if (this.value !== 'Times New Roman') {
                    loadAndUse(this.value);
                } else {
                    canvas.getActiveObject().set("fontFamily", this.value);
                    canvas.requestRenderAll();
                }
            };

            function loadAndUse(font) {
                var myfont = new FontFaceObserver(font)
                myfont.load().then(function () {
                    // when font is loaded, use it.
                    canvas.getActiveObject().set("fontFamily", font);
                    canvas.requestRenderAll();
                }).catch(function (e) {
                    console.log(e)
                    alert('font loading failed ' + font);
                });
            }

// Load all fonts using Font Face Observer
        }
    }
</script>


<style scoped>
    @font-face {
        font-family: observer-test1;
        src: url(@/assets/sourcesanspro-regular.woff) format('woff'),
        url(@/assets/sourcesanspro-regular.ttf) format('truetype');
    }

    @font-face {
        font-family: unknown;
        src: url(unknown.woff) format('woff'),
        url(unknown.ttf) format('truetype');
    }

    @font-face {
        font-family: observer-test3;
        src: url(@/assets/sourcesanspro-regular.woff) format('woff'),
        url(@/assets/sourcesanspro-regular.ttf) format('truetype');
    }

    @font-face {
        font-family: observer-test4;
        src: url(@/assets/subset.woff) format('woff'),
        url(@/assets/subset.ttf) format('truetype');
        unicode-range: u+0021;
    }

    @font-face {
        font-family: observer-test5;
        src: url(@/assets/subset.woff) format('woff'),
        url(@/assets/subset.ttf) format('truetype');
        unicode-range: u+4e2d,u+56fd;
    }

    @font-face {
        font-family: observer-test6;
        src: url(@/assets/subset.woff) format('woff'),
        url(@/assets/subset.ttf) format('truetype');
        unicode-range: u+10ffff;
    }

    @font-face {
        font-family: observer-test7;
        src: url(@/assets/subset.woff) format('woff'),
        url(@/assets/subset.ttf) format('truetype');
        unicode-range: u+23;
    }

    @font-face {
        font-family: observer-test8;
        src: url(@/assets/sourcesanspro-regular.woff) format('woff'),
        url(@/assets/sourcesanspro-regular.ttf) format('truetype');
    }

    @font-face {
        font-family: Trebuchet W01 Regular;
        src: url(@/assets/sourcesanspro-regular.woff) format('woff'),
        url(@/assets/sourcesanspro-regular.ttf) format('truetype');
    }

    @font-face {
        font-family: 'Neue Frutiger 1450 W04';
        src: url(@/assets/sourcesanspro-regular.woff) format('woff'),
        url(@/assets/sourcesanspro-regular.ttf) format('truetype');
    }
</style>
