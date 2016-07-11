// 引入样式文件
var style = require('../less/index.less');

// commonJs 依赖
var jQuery = require('jquery');
window.jQuery = jQuery;
var bot = require('bootstrap');

// 引入依赖
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

// 使用插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 调用组件
var header = require('../components/header.vue');
Vue.component('my-header', header);


var comps = require('../components/compB.vue');
Vue.component('comps', comps);


// 绑定 示例
var boot = new Vue({
    el: '#boot',
    template: '<a @click="a"></a>',
    data: function() {
        return {
            titles: ['title', 'name', 'mininame'],
            items: [
                ['angular', 'vue', 'test'],
                ['angular', 'vue', 'bootstrap'],
                ['angular', 'vue', 'bootstrap']
            ]
        };
    },
    methods: {
        a: function() {}
    }
});

boot.a();



// 定义组件
var Foo = Vue.extend({
    template: '<div @click="add" :class="className">Foo component <span>{{name}}</span></div>',
    props: ['name', 'className'], //
    ready: function() {
        // GET request
        var url = 'http://localhost:8080/ptuan/service/gettuaninfo.json?tuanNo=PT160330143246001006&time=';
        this.$http.get(url).then(function(response) {
            // 模拟ajax，这里不会执行
            this.$set('name', response.data.data.pageSize)
            this.$set('className', {
                'color-red': true
            });
            console.log(response);
            console.log(response);
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
    template: '<input v-model="input"/><span class="cor-red">{{input||"双向数据绑定"}}</span>',
    props: ['input']
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