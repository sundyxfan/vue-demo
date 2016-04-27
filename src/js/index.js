// 引入样式文件
var style = require('../less/index.less');

// 引入依赖
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

// 使用插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 调用组件
var header = require('../components/header.vue');
Vue.component('my-header', header)


// ajax 示例
new Vue({
    el: '#boot',
    data: function() {
        return {
            titles: ['title', 'name', 'mininame'],
            items: [
                ['angular', 'vue', 'test'],
                ['angular', 'vue', 'bootstrap'],
                ['angular', 'vue', 'bootstrap']
            ]
        };
    }
})



// 定义组件
var Foo = Vue.extend({
    template: '<div @click="add" :class="className">Foo component</div><span>{{name}}</span>',
    props: ['name', 'className'],
    ready: function() {
        // GET request
        this.$http.get('../../json/index.json').then(function(response) {
            // 模拟ajax，这里不会执行
        }, function(response) {
            // error callback
            this.$set('name', ['an12332ular', 'vue123'])
            this.$set('className', {
                'color-red': true
            });
            console.log(response);
        });
    },
    methods: {
        add: function() {
            this.$set('name', ['angular', 'vue', 'new ajax'])
        }
    }
})

var Bar = Vue.extend({
    template: '<p class="c-red">This is template bar!</p>'
})

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()



// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#main')