var css = require('../../bower_components/bootstrap/dist/css/bootstrap.min.css');
var $ = require('jquery');

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
    router = new VueRouter();

router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/logo': {
        name: 'logo',
        component: logo
    }
});

router.start(App, '#app');

new Vue({
    el: 'body',
    components: {
        'app-header': header,
        'app-footer': footer
    }
});