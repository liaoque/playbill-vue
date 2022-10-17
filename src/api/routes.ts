import {http} from "../utils/http";

type Result = {
  code: number;
  info: Array<any>;
};

export const getAsyncRoutes = (params?: object) => {
  return http.request<Result>("get", "/getAsyncRoutes", {params});
};

export const Login = (params?: object) => {
  console.log(params)
  return http.post("/login", {data:params});
};

