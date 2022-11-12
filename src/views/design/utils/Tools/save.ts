import {fabric} from "/@/utils/fabric/fabric";
import {v4 as uuidv4} from 'uuid';
import {useDesignStoreHook} from "/@/store/modules/design";
import {PlaybillSave, PlaybillView} from "/@/api/routes";
import {ref} from "vue";
import {message} from "@pureadmin/components";

const useDesignStore = useDesignStoreHook();

function downloadImage() {
  const ext = "png";
  let canvas = useDesignStore.canvas;
  const base64 = canvas.toDataURL({
    format: ext,
    enableRetinaScaling: true,
    multiplier: 1
  });
  const link = document.createElement("a");
  link.href = base64;
  link.download = `eraser_example.${ext}`;
  link.click();
}

function downloadSVG() {
  let canvas = useDesignStore.canvas;
  const svg = canvas.toSVG();
  const a = document.createElement("a");
  const blob = new Blob([svg], {
    type: "image/svg+xml"
  });
  const blobURL = URL.createObjectURL(blob);
  a.href = blobURL;
  a.download = "eraser_example.svg";
  a.click();
  URL.revokeObjectURL(blobURL);
}

const loading = ref(false);

function toJSON() {
  loading.value = true;
  let canvas = useDesignStore.canvas;
  const json = canvas.toDatalessJSON(["clipPath", "eraser", "component_type", "uuid","aCoords"]);
  PlaybillSave({
    data: {
      ...json,
      ...useDesignStore.canvasMap
    }
  }).then((data: any) => {
    if (data.code != 0) {
      return Promise.reject(data)
    }
    useDesignStore.setId(data.info.oid)
  }).catch((data?: any) => {
    data.message && message.error(data.message);
  }).finally(()=>{
    loading.value = false;
  })

}

function toView() {
  loading.value = true;
  let canvas = useDesignStore.canvas;
  const json = canvas.toDatalessJSON(["clipPath", "eraser", "component_type", "uuid","aCoords"]);
  return PlaybillView({
    data: {
      ...json,
      ...useDesignStore.canvasMap
    }
  }).then((data: any) => {
    if (data.code != 0) {
      return Promise.reject(data)
    }
    return data.info
  }).catch((data?: any) => {
    data.message && message.error(data.message);
    return false;
  }).finally(()=>{
    loading.value = false;
  })
}

export {
  downloadImage,
  downloadSVG,
  toJSON,
  toView
}
