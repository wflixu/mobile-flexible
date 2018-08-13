# mobile-flexible

整合移动端适配和预渲染的快速脚手架



## 使用步骤

``` bash
# 先把npm 设置成淘宝镜像，因为预渲染要用到无头的chrome puppeteer ,这个不被墙了，所以用淘宝镜像 
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装依赖
cnpm install

# 查看效果
npm run dev

# 构建 build for production with minification
npm run build

```

# 移动端vm单位适配

 参考这篇  <a href="https://www.w3cplus.com/mobile/vw-layout-in-vue.html">如何在Vue项目中使用vw实现移动端适配</a> 。本脚手架主要是整合文中所有的插件

# 预渲染
vue 单页面非好，但内容都在js中，首次加载，页面是空的，首次加载完全显示比较慢.如果写成单例形式，vue生态的一些工具，不方便使用。 如果是一个页面，在路由中配置根目录，只渲染根目录就行，一次一个页面

如果多个页面 配置在 build=> webpack.prod.config.js =>plugins =>PrerenderSPAPlugin => routes 中添加与路由对应的页面
