<template>
    <div>
        <selection :canvases="canvases"></selection>

        <custom-borders-controls :canvases="canvases"></custom-borders-controls>

        <transparent-corners :canvases="canvases"></transparent-corners>

        <noBorders :canvases="canvases"></noBorders>

        <no-controls :canvases="canvases"></no-controls>

        <no-borders-no-controls :canvases="canvases"></no-borders-no-controls>


        <custom-cursor-on-object-hover :canvases="canvases"></custom-cursor-on-object-hover>
        <modification-on-move :canvases="canvases"></modification-on-move>
        <no-group-selection :canvases="canvases"></no-group-selection>
        <unselectable-object :canvases="canvases"></unselectable-object>
        <custom-background-color :canvases="canvases"></custom-background-color>
        <custom-background-image :canvases="canvases"></custom-background-image>



        <locked-object-rotation :canvases="canvases"></locked-object-rotation>
        <locked-object-scaling :canvases="canvases"></locked-object-scaling>
        <locked-x-movement :canvases="canvases"></locked-x-movement>
        <locked-y-movement :canvases="canvases"></locked-y-movement>
        <rotating-point :canvases="canvases"></rotating-point>

    </div>
</template>

<script>
    import selection from "./customization/selection.vue";
    import customBordersControls from "./customization/custom-borders-controls.vue";
    import transparentCorners from "./customization/transparent-corners.vue";
    import noBorders from "./customization/no-borders.vue";
    import noControls from "./customization/no-controls.vue";
    import noBordersNoControls from "./customization/no-borders-no-controls.vue";
    import customCursorOnObjectHover from "./customization/custom-cursor-on-object-hover.vue";
    import modificationOnMove from "./customization/modification-on-move.vue";
    import noGroupSelection from "./customization/no-group-selection.vue";
    import unselectableObject from "./customization/unselectable-object.vue";
    import customBackgroundColor from "./customization/custom-background-color.vue";
    import customBackgroundImage from "./customization/custom-background-image.vue";
    import lockedObjectRotation from "./customization/locked-object-rotation.vue";
    import lockedObjectScaling from "./customization/locked-object-scaling.vue";
    import lockedXMovement from "./customization/locked-x-movement.vue";
    import LockedYMovement from "./customization/locked-y-movement.vue";
    import rotatingPoint from "./customization/rotating-point.vue";

    export default {
        components: {
            selection,
            customBordersControls,
            transparentCorners,
            noBorders,
            noControls,
            noBordersNoControls,
            customCursorOnObjectHover,
            modificationOnMove,
            noGroupSelection,
            unselectableObject,
            customBackgroundColor,
            customBackgroundImage,
            lockedObjectRotation,
            lockedObjectScaling,
            lockedXMovement,
            LockedYMovement,
            rotatingPoint,
        },
        data() {
            return {
                canvases: []
            }
        },
        name: "customization",
        props: ['canvas'],
        mounted() {

            // this.canvas.width = 1
        }
    }
</script>

<style scoped>

</style>
