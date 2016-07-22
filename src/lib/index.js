var css = require('../../bower_components/bootstrap/dist/css/bootstrap.min.css');
// var bootstrap = require(['../../bower_components/jquery/dist/jquery.min.js'], function($) {
//     require('../../bower_components/bootstrap/dist/js/bootstrap.min.js');
// });

var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);


var header = require('../component/header.vue'),
    footer = require('../component/footer.vue'),
    index = require('../component/index.vue'),
    logo = require('../component/logo.vue');




var App = Vue.extend({}),
    router = new VueRouter({
        saveScrollPosition: true
    });

router.map({
    '/': {
        name: 'index',
        component: function(resolve) {
            require(['../component/index.vue'], resolve);
        }
    },
    '/logo': {
        name: 'logo',
        component: function(resolve) {
            require(['../component/logo.vue'], resolve);
        }
    },
    'test': {
        name: 'test',
        component: function(resolve) {
            require(['../component/test.vue'], resolve);
        }
    }
});

router.start(App, 'body');