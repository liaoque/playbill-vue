import {fabric} from "/@/utils/fabric";
import {v4 as uuidv4} from 'uuid';
import {useDesignStoreHook} from "/@/store/modules/design";
const useDesignStore = useDesignStoreHook();

function downloadImage() {
  const ext = "png";
  let canvas = useDesignStore.canvas;
  const base64 = canvas.toDataURL({
    format: ext,
    enableRetinaScaling: true,
    multiplier: 2
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

function toJSON() {
  let canvas = useDesignStore.canvas;
  const json = canvas.toDatalessJSON(["clipPath", "eraser", "component_type", "uuid"]);
  const out = JSON.stringify(json, null, "\t");
  const blob = new Blob([out], {
    type: "text/plain"
  });
  const clipboardItemData = {
    [blob.type]: blob
  };
  try {
    navigator.clipboard &&
    (navigator.clipboard.write([
      new ClipboardItem(clipboardItemData)
    ]));
  } catch (error) {
    console.log(error);
  }
  const blobURL = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobURL;
  a.download = "eraser_example.json";
  a.click();
  URL.revokeObjectURL(blobURL);
}


export {
  downloadImage,
  downloadSVG,
  toJSON
}
