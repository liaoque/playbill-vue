<template>
  <el-divider/>
  <el-form-item label="" id="renderPoints">

    <el-row :gutter="24" v-for="(item, index) in props.klassObj.points" :key="index">
      <el-col :span="9">
        <el-input v-model="item.x" :placeholder="'第' + index + '个点的x坐标'" @change="renderPoints(index)">
          <template #prepend>X</template>
        </el-input>
      </el-col>
      <el-col :span="9">
        <el-input v-model="item.y" :placeholder="'第' + index + '个点的y坐标'" @change="renderPoints(index)">
          <template #prepend>Y</template>
        </el-input>
      </el-col>
      <el-button-group>
        <el-button type="primary" size="small" :icon="Plus" @click="addPoints(index)"/>
        <el-button type="primary" size="small" :icon="Minus" @click="delPoints(index)"/>
      </el-button-group>
    </el-row>

    <el-switch
      v-model="edited"
      class="mb-2"
      active-text="编辑多边形"
      inactive-text="锁定多边形"
      @change="editPoints"
    />
  </el-form-item>


</template>


<script lang="ts">
  // 声明额外的选项
  export default {};
</script>

<script lang="ts" setup>

  import {nextTick, ref} from "vue";
  import {useDesignStoreHook} from "/@/store/modules/design";
  import {Minus, Plus} from "@element-plus/icons-vue";
  import {saveAction} from "/@/views/design/utils/Tools/stack";

  let edited = ref(false);

  const props = defineProps({
    klassObj: Object
  });

  const useDesignStore = useDesignStoreHook()

  function renderPoints(anchorIndex) {
    props.klassObj.klass.set('points', props.klassObj.points.map((item) => {
      return {x: parseInt(item.x), y: parseInt(item.y)}
    }))

    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function addPoints(index) {
    nextTick(() => {
      props.klassObj.points = [...props.klassObj.points.slice(0, index + 1), {
        x: 0,
        y: 0
      }, ...props.klassObj.points.slice(index + 1)]
    })
  }

  function delPoints(index) {
    nextTick(() => {
      props.klassObj.points = [...props.klassObj.points.slice(0, index), ...props.klassObj.points.slice(index + 1)]
    })
  }

  function editPoints() {
    let poly = props.klassObj.klass
    useDesignStore.canvas.setActiveObject(poly);
    if(edited.value == false){
      // poly.cornerColor = 'blue';
      poly.cornerStyle = 'rect';
      poly.controls = fabric.Object.prototype.controls;
    }else{
      let lastControl = poly.points.length - 1;
      poly.cornerStyle = 'circle';
      poly.cornerColor = 'rgba(0,0,255,0.5)';
      poly.controls = poly.points.reduce(function(acc, point, index) {
        acc['p' + index] = new fabric.Control({
          positionHandler: polygonPositionHandler,
          actionHandler: anchorWrapper(index > 0 ? index - 1 : lastControl, actionHandler),
          actionName: 'modifyPolygon',
          pointIndex: index
        });
        return acc;
      }, { });
    }
    useDesignStore.canvas.requestRenderAll();
  }


  function polygonPositionHandler(dim, finalMatrix, fabricObject) {
    let x = (fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x),
      y = (fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y);
    return fabric.util.transformPoint(
      { x: x, y: y },
      fabric.util.multiplyTransformMatrices(
        fabricObject.canvas.viewportTransform,
        fabricObject.calcTransformMatrix()
      )
    );
  }

  function anchorWrapper(anchorIndex, fn) {
    return function(eventData, transform, x, y) {
      let fabricObject = transform.target,
        absolutePoint = fabric.util.transformPoint({
          x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
          y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
        }, fabricObject.calcTransformMatrix()),
        actionPerformed = fn(eventData, transform, x, y),
        newDim = fabricObject._setPositionDimensions({}),
        polygonBaseSize = getObjectSizeWithStroke(fabricObject),
        newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
        newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
      fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
      return actionPerformed;
    }
  }


  function getObjectSizeWithStroke(object) {
    let stroke = new fabric.Point(
      object.strokeUniform ? 1 / object.scaleX : 1,
      object.strokeUniform ? 1 / object.scaleY : 1
    ).multiply(object.strokeWidth);
    return new fabric.Point(object.width + stroke.x, object.height + stroke.y);
  }


  function actionHandler(eventData, transform, x, y) {
    let polygon = transform.target,
      currentControl = polygon.controls[polygon.__corner],
      mouseLocalPosition = polygon.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
      polygonBaseSize = getObjectSizeWithStroke(polygon),
      size = polygon._getTransformedDimensions(0, 0),
      finalPointPosition = {
        x: mouseLocalPosition.x * polygonBaseSize.x / size.x + polygon.pathOffset.x,
        y: mouseLocalPosition.y * polygonBaseSize.y / size.y + polygon.pathOffset.y
      };
    polygon.points[currentControl.pointIndex] = finalPointPosition;
    return true;
  }


</script>


<style>
  #renderPoints {
    margin-right: 12px;
  }

  #renderPoints .el-input-group__append, .el-input-group__prepend {
    padding: 0 10px
  }
</style>
