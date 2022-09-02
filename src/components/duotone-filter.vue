<template>
    <div>
        <input type="color" id="colorLight" value="#00ff36">
        <input type="color" id="colorDark" value="#23278a">
    </div>
</template>

<script>
    export default {
        name: "duotone-filter",
        props:['canvas'],
        mounted(){
            let colorHandlerLight = function(evt) {
                duotoneFilter.subFilters[1].color = evt.target.value;
                globalImage.applyFilters();
                canvas.requestRenderAll();
            };
            document.getElementById('colorLight').addEventListener('change', colorHandlerLight);
            let colorHandlerDark = function(evt) {
                duotoneFilter.subFilters[2].color = evt.target.value;
                globalImage.applyFilters();
                canvas.requestRenderAll();
            };
            document.getElementById('colorDark').addEventListener('change', colorHandlerDark);
            let globalImage;


            let canvas = this.canvas;
            let duotoneFilter = new fabric.Image.filters.Composed({
                subFilters: [
                    new fabric.Image.filters.Grayscale({ mode: 'luminosity' }), // make it black and white
                    new fabric.Image.filters.BlendColor({ color: '#00ff36' }), // apply light color
                    new fabric.Image.filters.BlendColor({ color: '#23278a', mode: 'lighten' }), // apply a darker color
                ]
            });
            fabric.Image.fromURL('/public/pug.jpg', function(image) {
                globalImage = image;
                image.filters = [duotoneFilter];
                image.scaleToWidth(480);
                image.applyFilters();
                canvas.add(image);
            }, { crossOrigin: 'anonymous' });

        }
    }
</script>

<style scoped>

</style>
