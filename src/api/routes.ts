import {http} from "../utils/http";

type Result = {
  code: number;
  info: Array<any>;
};

export const getAsyncRoutes = (params?: object) => {
  return http.request<Result>("get", "/api/getAsyncRoutes", {params});
};

export const Login = (params?: object) => {
  return http.post("/api/login", {data: params});
};

export const PlaybillView = (params?: object) => {
  return http.post("/api/playbill/view", {data: params});
};


export const PlaybillSave = (params?: object) => {
  return http.post("/api/playbill/save", {data: params});
};


export const PlaybillQuery = (id: string) => {
  return http.get("/api/playbill/query/id/" + id);
};


export const PlaybillAll = (params?: object) => {
  return http.get("/api/playbill/list", {data: params});
};

export const apiBaseUrl = () => {
  return http.baseURL()
};

export type {Result};
