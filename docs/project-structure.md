## 项目(Joker)目录结构如下:

```
Joker/
   ├──config/                    * 配置
   │   ├──helpers.js             * 配置文件辅助函数
   │   │
   │   ├──webpack.dev.js         * webpack开发配置
   │   │
   │   ├──webpack.prod.js        * webpack产品配置
   │   │
   │   └──webpack.test.js        * webpack测试配置
   │
   ├──src/                       * 源文件
   │   ├──custom-typings.d.ts    * 自定义类型
   │   │
   │   ├──index.html             * 项目布局
   │   │
   │   ├──main.browser.ts        * 浏览器入口文件
   │   │
   │   ├──polyfills.browser.ts   * polyfills文件
   │   │
   │   ├──vendor.browser.ts      * vendor文件
   │   │
   │   ├──app/                   * 项目代码
   │   │   │
   │   │   ├──app.component.ts   * 主组件
   │   │   │
   │   │   ├──app.menu.ts        * 菜单
   │   │   │
   │   │   ├──app.module.ts      * 主模块
   │   │   │
   │   │   ├──app.routes.ts      * 路由
   │   │   │  
   │   │   ├──app.scss           * 样式 
   │   │   │
   │   │   ├──environment.ts     * 环境提供
   │   │   │
   │   │   ├──global.state.ts    * 组件间数据交换的全局状态
   │   │   │
   │   │   ├──pages/             * 页面组件
   │   │   │
   │   │   └──theme/             * 全局组件
   │   │
   │   └──assets/                * 静态资源
   │
   ├──tsconfig.json              * typescript配置
   ├──tslint.json                * tslint配置
   └──package.json               * 依赖管理
```
