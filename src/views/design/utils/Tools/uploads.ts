import {fabric} from "/@/utils/fabric";
import {v4 as uuidv4} from 'uuid';
import {useDesignStoreHook} from "/@/store/modules/design";
import {UploadFile} from "element-plus";
import {getConfig} from "/@/config";

const useDesignStore = useDesignStoreHook();

const handleRemove = (file: UploadFile) => {

};

const handleSuccess = (klass, file: UploadFile) => {
  klass.setSrc("http://localhost:8000/images/head.jpg", useDesignStore.canvas.renderAll.bind(useDesignStore.canvas), {crossOrigin: "anonymous"})
};


const uploadApiUrl = getConfig('UploadApiUrl');

const handleRemoveBackground = (file: UploadFile) => {
  useDesignStore.removeBackground();
};

const handleSuccessBackground = (file: UploadFile) => {
  useDesignStore.setBackground(file.url)
};
export {
  uploadApiUrl,
  handleSuccess,
  handleRemove,
  handleRemoveBackground,
  handleSuccessBackground,

}
