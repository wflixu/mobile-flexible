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
自己的页面可以写在pages中，然后在路由中配置根目录引用自己的也买你，自己的页面可以按需引入一些第三方vue生态的库。生成修改文件名，在配置 入口 entry 对象入口键值。 生成HTML 的引用地址，配置出口output 对象 path 是子路径，相对与根路径，publicPath可以设置成静态文件的服务器域名地址或 cdn地址 

# 移动端vw单位适配

 参考这篇  <a href="https://www.w3cplus.com/mobile/vw-layout-in-vue.html">如何在Vue项目中使用vw实现移动端适配</a> 。本脚手架主要是整合文中所有的插件

# 预渲染
vue 单页面非好，但内容都在js中，首次加载，页面是空的，首次加载完全显示比较慢.如果写成单例形式，vue生态的一些工具，不方便使用。 如果是一个页面，在路由中配置根目录，只渲染根目录就行，一次一个页面

如果多个页面 配置在 build=> webpack.prod.config.js =>plugins =>PrerenderSPAPlugin => routes 中添加与路由对应的页面


# 配置

在一个页面或活动页时，按照官方的配置，build 之后会生成8 个引用文件，2个css，6个js文件在大型应用 这些是优化，提高效率，单个页面或活动页没有必要过度优化。
## sourcemap 文件生成

sourcemap文件是调试用的,在开发模式很有用，在生产环境没有必要，在build 配置中根据需求去掉生成source文件
js 文件source map 文件生成的配置在config => index.js => build =>  devtool 字段

# manifest 和vendor 文件 
manifest 文件缓存用,vendor  是吧外部引用的库放到一起,避免重复打包
这两项的配置 webpack.prod.config.js => plugins => webpack.optimize.不需要优化的简单的页面可以把这些注释掉,build 一个页面只生成三个文件,HTML,js ,css 



