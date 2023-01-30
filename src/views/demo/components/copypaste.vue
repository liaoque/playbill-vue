<template>
  <div class="controls">
    <p>
      <el-button id="copy" @click="Copy">Copy Selected Objects</el-button>
    </p>
    <p>
      <el-button id="paste" @click="Paste">Paste Selected Objects</el-button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "copypaste",
    props: ['canvas'],
    data: () => {
      return {
        _clipboard: null
      }
    },
    methods: {
      Copy() {
        // clone what are you copying since you
        // may want copy and paste on different moment.
        // and you do not want the changes happened
        // later to reflect on the copy.
        let self = this;
        let canvas = this.canvas;
        canvas.getActiveObject().clone(function (cloned) {
          self._clipboard = cloned;
        });
      },
      Paste() {
        let self = this;
        let canvas = this.canvas;
        // clone again, so you can do multiple copies.
        self._clipboard.clone(function (clonedObj) {
          canvas.discardActiveObject();
          clonedObj.set({
            left: clonedObj.left + 10,
            top: clonedObj.top + 10,
            evented: true,
          });
          console.log(clonedObj.type )
          if (clonedObj.type === 'activeSelection') {
            console.log("activeSelection")
            // active selection needs a reference to the canvas.
            clonedObj.canvas = canvas;
            clonedObj.forEachObject(function (obj) {
              canvas.add(obj);
            });
            // this should solve the unselectability
            clonedObj.setCoords();
          } else {
            canvas.add(clonedObj);
          }
          self._clipboard.top += 10;
          self._clipboard.left += 10;
          canvas.setActiveObject(clonedObj);
          canvas.requestRenderAll();
        });
      }
    },
    mounted() {
      let _clipboard;
      let canvas = this.canvas;
// create a rectangle object
      let rect = new fabric.Rect({
        left: 100,
        top: 50,
        fill: '#D81B60',
        width: 100,
        height: 100,
        strokeWidth: 2,
        stroke: "#880E4F",
        rx: 10,
        ry: 10,
        angle: 45,
        hasControls: true
      });

      canvas.add(rect);

// create a rectangle object
      let rect2 = new fabric.Rect({
        left: 200,
        top: 50,
        fill: '#F06292',
        width: 100,
        height: 100,
        strokeWidth: 2,
        stroke: "#880E4F",
        rx: 10,
        ry: 10,
        angle: 45,
        hasControls: true
      });

      canvas.add(rect2);

      let circle1 = new fabric.Circle({
        radius: 65,
        fill: '#039BE5',
        left: 0
      });

      let circle2 = new fabric.Circle({
        radius: 65,
        fill: '#4FC3F7',
        left: 110,
        opacity: 0.7
      });

      let group = new fabric.Group([circle1, circle2,], {
        left: 40,
        top: 250
      });

      canvas.add(group);
    }
  }
</script>

<style scoped>

</style>
