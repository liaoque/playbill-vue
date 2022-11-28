# playbill-php

playbill是一款快速开发海报的工具。只需上传一张背景图，在对应的位置放上组件（文字、图片、二维码、头像）即可生成海报。并提供api替换图片、文字内容。

---

[安装](./doc/INSTALL.md)

在线体验：


## 技术栈

### 后端

**[playbill-php](https://github.com/liaoque/playbill-php)**

| 框架 | 说明 |  版本 |
| --- | --- | --- |
| [php](https://www.php.net/) | 语言 |   7.4+ |
| [yaf](https://www.php.net/manual/zh/intro.yaf.php) | 应用开发框架 |   2.3.5+ |
| [MongoDB](https://www.mongodb.com/docs/manual/) | 数据库服务器 | 4.2 |
| [libvips](https://github.com/libvips/libvips) | 多线程图像处理库 | 8.13.0 |
| [php-vips](https://github.com/libvips/php-vips) | php-vips扩展 | 2.1.0 |

### 前端

**[playbill-vue](https://github.com/liaoque/playbill-vue)**

| 框架 | 说明 |  版本 |
| --- | --- | --- |
| [Vue](https://cn.vuejs.org/index.html) | JavaScript 框架 | 3.2.45 |
| [vue-pure-admin](https://github.com/xiaoxian521/vue-pure-admin) | 后台管理系统模版 | 3.5.0 |

### 网上提供的免费字体

## 用法

### 安装依赖

pnpm install

### 修改环境配置

vim .env.development

### 执行

pnpm run dev


## 许可证

原则上不收取任何费用及版权，可以放心使用，不过如需二次开源（比如用此平台二次开发并开源）请联系作者获取许可！

[MIT © xiaoxian521-2020](./LICENSE)
