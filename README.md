# nuxt-starter

一个开箱即用的基于 `Nuxt3` + `Pinia` + `TailwindCSS` + `TypeScript` 的项目模板

这个工程的搭建笔记可以[在这里查看](https://welives.github.io/blog/front-end/engineering/nuxt.html)

## 目录结构

```
├── app             重写路由
├── assets          静态资源
├── components      公共组件
├── composables     放置自动导入方法
├── config          配置文件
├── constants       常量配置
├── libs            公共方法及工具方法
├── layouts         布局组件
├── pages           页面
├── public
├── server
│   ├── api         书写服务端API
│   └── middleware  服务端中间件
└── stores
```

## 使用

```sh
pnpm install
```

### 开发模式

```sh
pnpm dev
```

### 打包

```sh
pnpm build
```

### 预览

```sh
pnpm preview
```

## 相关文档

- [Nuxt3](https://nuxt.com.cn/)
- [Pinia](https://pinia.vuejs.org/zh/)
- [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/)
- [Shadcn-vue](https://github.com/radix-vue/shadcn-vue)
- [Vant](https://vant-ui.github.io/vant/#/zh-CN)
- [TailwindCSS](https://tailwind.nodejs.cn/)
- [TypeScript](https://www.tslang.cn/)
- [ESLint](https://eslint.nodejs.cn/)
- [Prettier](https://prettier.nodejs.cn/)
