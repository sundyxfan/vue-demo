<style>
    @import url('../../node_modules/magnific-popup/dist/magnific-popup.css');
    #img-text {
        width: 400px;
        padding: 20px;
        margin: auto;
        color: red;
        background-color: #fff;
        text-align: center;
    }
</style>

<template>
    <!-- 组件A -->
    <comp-a></comp-a>
    <hr>
    <div class="btn-group">
        <a v-for="link in links" class="btn btn-default" href="#" role="button">{{link}}</a>
    </div>
    <div class="img-pop">
        <a href="http://www.myvue.com/images/vue_logo_square.png">
            <img src="http://www.myvue.com/images/vue_logo_square.png" class="img-responsive" alt="Image">
        </a>
    </div>
    <div class="text-pop">
        <a href="#img-text">
            this is an image text popup
        </a>
    </div>
    <div id="img-text" class="white-popup mfp-with-anim mfp-hide">
        <h2>hello magnific popup</h2>
        <p>yes, you can use third party plugins here</p>
    </div>
</template>

<script>
    // 引入组件A
    var compA = require('./compA.vue');

    var $ = require('jquery'); // 引入jquery
    var magnific = require('magnific-popup'); // 引入第三方插件

    $(document).ready(function() {
        $('.img-pop a').magnificPopup({
            type: 'image'
        });

        $('.text-pop a').magnificPopup({
            type: 'inline'
        })
    });

    module.exports = {
        data: function() {
            return {
                links: ['Left', 'Middle', 'Right']
            }
        },
        components: {
            compA
        }
    }
</script>
