<template>
    <div>

        <video height="360" width="480" id="video1" style="display: none" muted>
            <source src="/public/dizzy.mp4">
            <source src="/public/dizzy.ogv">
        </video>

        <video height="360" width="500" id="webcam" style="display: none"></video>

    </div>
</template>

<script>
    export default {
        name: "video-element",
        props: ['canvas'],
        data() {
            return {
                info: []
            }
        },
        methods: {},
        mounted() {
            let canvas = this.canvas;

            let video1El = document.getElementById('video1');
            let webcamEl = document.getElementById('webcam');

            let video1 = new fabric.Image(video1El, {
                left: 200,
                top: 300,
                angle: -15,
                originX: 'center',
                originY: 'center',
                objectCaching: false,
            });

            let webcam = new fabric.Image(webcamEl, {
                left: 539,
                top: 328,
                angle: 94.5,
                originX: 'center',
                originY: 'center',
                objectCaching: false,
            });

            canvas.add(video1);
            video1.getElement().play();

            // Older browsers might not implement mediaDevices at all, so we set an empty object first
            if (navigator.mediaDevices === undefined) {
                navigator.mediaDevices = {};
            }

            if (navigator.mediaDevices.getUserMedia === undefined) {
                navigator.mediaDevices.getUserMedia = function (constraints) {

                    // First get ahold of the legacy getUserMedia, if present
                    let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

                    // Some browsers just don't implement it - return a rejected promise with an error
                    // to keep a consistent interface
                    if (!getUserMedia) {
                        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                    }

                    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
                    return new Promise(function (resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                }
            }


            // adding webcam video element
            navigator.mediaDevices.getUserMedia({video: true})
                .then(function getWebcamAllowed(localMediaStream) {
                    webcamEl.srcObject = localMediaStream;

                    canvas.add(webcam);
                    webcam.moveTo(0); // move webcam element to back of zIndex stack
                    webcam.getElement().play();
                }).catch(function getWebcamNotAllowed(e) {
                // block will be hit if user selects "no" for browser "allow webcam access" prompt
            });

            fabric.util.requestAnimFrame(function render() {
                canvas.renderAll();
                fabric.util.requestAnimFrame(render);
            });
        }
    }
</script>

<style scoped>

</style>
