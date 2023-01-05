import { http } from "../utils/http";

type Result = {
  code: number;
  info: Array<any>;
};

export const getAsyncRoutes = (params?: object) => {
  return http.request<Result>("get", "/getAsyncRoutes", { params });
};

export const Login = (params?: object) => {
  return http.post("/login", { data: params });
};

export const PlaybillView = (params?: object) => {
  return http.post("/playbill/view", { data: params });
};


export const PlaybillSave = (params?: object) => {
  return http.post("/playbill/save", { data: params });
};


export const PlaybillQuery = (id: string) => {
  return http.get("/playbill/query/id/" + id);
};


export const PlaybillAll = (params?: object) => {
  return http.get("/playbill/list", { params });
};

export const apiBaseUrl = () => {
  return http.baseURL();
};

export type { Result };
