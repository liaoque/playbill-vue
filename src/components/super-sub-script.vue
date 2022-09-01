<template>
    <div>
        <button id="super" @click="superScript()">Set superscript on selection</button>
        <button id="sub" @click="subScript()">Set subscript on selection</button>
        <button @click="remove()">Remove script informations</button>

    </div>
</template>

<script>
    export default {
        name: "super-sub-script",
        props: ['canvas'],
        methods:{
            remove() {
                var canvas = this.canvas
                var active = canvas.getActiveObject();
                if (!active) return;
                active.setSelectionStyles({
                    fontSize: undefined,
                    deltaY: undefined,
                });
                canvas.requestRenderAll();
            },
            superScript() {
                var canvas = this.canvas
                var active = canvas.getActiveObject();
                if (!active) return;
                active.setSuperscript();
                canvas.requestRenderAll();
            },
            subScript() {
                var canvas = this.canvas
                var active = canvas.getActiveObject();
                if (!active) return;
                active.setSubscript();
                canvas.requestRenderAll();
            }

        },
        mounted() {

            var canvas = this.canvas
// create a rectangle object
            var itext = new fabric.IText('This is a IText object', {
                left: 100,
                top: 150,
                fill: '#D81B60',
                strokeWidth: 2,
                stroke: "#880E4F",
            });

            var textbox = new fabric.Textbox('This is a Textbox object', {
                left: 20,
                top: 50,
                fill: '#880E4F',
                strokeWidth: 2,
                stroke: "#D81B60",
            });

            canvas.add(itext, textbox);

        }
    }
</script>

<style scoped>

</style>
