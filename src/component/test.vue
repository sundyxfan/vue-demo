<style type="text/css" scoped>
    h2 {
        font-size: 2rem;
    }
    p {
        font-size: 1rem;
    }
</style>

<template>
    <app-header></app-header>
    <div class="container">
        <h2>this is a test</h2>
        <p>Webpack 已经集成了代码分割功能。你可以使用 AMD 风格的 require 来对你的代码标识代码分割点:</p>
    </div>
</template>

<script type="text/javascript">
    var header = require('./header.vue');

    module.exports = {
        data: function() {
            return {
                name: '',
                msg: ''
            };
        },
        components: {
            'app-header': header
        },
        ready: function() {
            var _this = this;
            setTimeout(function() {
                console.log('asyn loaded');
                _this.name = 'test';
                _this.msg = 'loading by asyn';
            }, 3000);
        }
    };
</script>