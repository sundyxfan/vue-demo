## Sellerpc demo

项目开发基于[vue](http://vuejs.org.cn/)和[webpack](https://webpack.github.io/)，依赖`node`环境，因此需要[安装node](https://nodejs.org/en/)

### 演示

-- [online demo](https://jsfiddle.net/La6jneve/1/)

node安装完成后，打开`cmd`进入当前文件所在目录后，逐步执行下面命令

1.*将npm下载地址指向淘宝镜像*

>npm install -g cnpm --registry=https://registry.npm.taobao.org

2.*安装所有依赖*

>cnpm install

3.*开启gulp监控*

>gulp



访问views目录下的页面即可看到效果。

gulp任务会开启对src目录下所有文件的监控，如果有修改会将修改编译到resource目录中，刷新页面即可看到改动。

**已完成功能：**

- [x] 基础数据绑定的实现
- [x] 模块组件化
- [x] 组件的复用
- [x] 样式文件的引入
- [x] 图片的引入
- [x] 第三方插件的引入


### issues

+   [how-to-integrate-bootstrap-to-vue-js](http://forum.vuejs.org/topic/1403/how-to-integrate-bootstrap-to-vue-js/4)
+   [bootstrap package for webpack](https://github.com/gowravshekar/bootstrap-webpack)
+   [npm ERR! Please try running this command again as root/Administrator](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)
+   [fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
+   [nodejs-error-installing-with-npm](https://github.com/nodejs/node-gyp)



### 学习链接

-   Vue链接
    +   [Vue.js官网](http://vuejs.org.cn/)
    +   [Vue学习资源汇总](https://github.com/vuejs/awesome-vue#tutorials)
    +   [官方demo:vue-loader-example](https://github.com/vuejs/vue-loader-example/)
-   相关学习链接
    +   [npm](https://www.npmjs.com/) javascript的包管理器(node package manager)
    +   [cnpm](https://npm.taobao.org/) 淘宝 NPM 镜像(定时和npm同步，提升包下载速度)
    +   [webpack](https://webpack.github.io/) 模块打包器
    +   [gulp](http://gulpjs.com/) 工程自动化工具
    +   [less](http://less.bootcss.com/)  CSS 预处理语言


