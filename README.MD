## sellerpc demo

项目开发基于[vue](http://vuejs.org.cn/)和[webpack](https://webpack.github.io/)，依赖`node`环境，因此需要[安装node](https://nodejs.org/en/)

### 开发环境

node安装完成后逐步执行下面命令

**安装gulp依赖**：

>cnpm install --save-dev gulp gulp-webpack gulp-rev gulp-rev-replace del gulp-watch gulp.spritesmith gulp-cached gulp-beautify gulp-util

**安装webpack和插件**

>cnpm install --save-dev style-loader less-loader file-loader url-loader vue-loader 

**安装vue和插件**

>cnpm install --save-dev vue css-loader vue-router vue-resource

或者执行`cnpm install`安装所有依赖。


### 演示

执行完`cnpm install`后，执行`gulp`，然后访问views目录下的页面即可看到效果
