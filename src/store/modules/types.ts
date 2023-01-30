import {RouteRecordName} from "vue-router";
import {fabric} from "/@/utils/fabric/fabric";
import {ref} from "@vue/runtime-core";

export type cacheType = {
    mode: string;
    name?: RouteRecordName;
};

export type positionType = {
    startIndex?: number;
    length?: number;
};

export type appType = {
    sidebar: {
        opened: boolean;
        withoutAnimation: boolean;
        // 判断是否手动点击Collapse
        isClickCollapse: boolean;
    };
    layout: string;
    device: string;
};

export type multiType = {
    path: string;
    parentPath: string;
    name: string;
    meta: any;
    query?: object;
    params?: object;
};

export type setType = {
    title: string;
    fixedHeader: boolean;
    hiddenSideBar: boolean;
};

export type userType = {
    token: string;
    name?: string;
    verifyCode?: string;
    currentPage?: number;
};


export type designBackgroundType = {
    src: string;
}

export type designCanvasMapType = {
    width: number,
    height: number,
    zoom: number,
    opacity: boolean,
    oid?: string,
    filename: string,
    title?: string,
    mime_type: string,
}

export type canvasLayer = {
    componentSize: number,
}


export type designCanvasType = {
    // @ts-ignore
    canvas?: fabric.Canvas;
    background: designBackgroundType;
    canvasMap: designCanvasMapType;
    activeSelection?: any;
    id?: string;
    canvasLayer: canvasLayer;

}
