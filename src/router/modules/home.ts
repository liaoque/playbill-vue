import { $t } from "/@/plugins/i18n";
import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("/@/layout/index.vue");

const homeRouter: RouteConfigsTable = {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "home-filled",
    title: $t("menus.hshome"),
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("/@/views/welcome/index.vue"),
      meta: {
        title: $t("menus.hshome"),
        keepAlive:true
      }
    },
    {
      path: "/design",
      name: "Design",
      component: () => import("/@/views/design/index.vue"),
      meta: {
        title: $t("menus.design"),
        keepAlive:true
      }
    },
    {
      path: "/demo",
      name: "Demo",
      component: () => import("/@/views/demo/index.vue"),
      meta: {
        title: $t("menus.demo")
      }
    }
  ]
};

export default homeRouter;
