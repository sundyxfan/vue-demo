<style scoped>
    .compA {
        margin: 10px 0;
        background: yellow;
        background-image: -webkit-linear-gradient(hsl(0, 80%, 70%), #bada55);/* For Chrome 25 and Safari 6, iOS 6.1, Android 4.3 */
        background-image: -moz-linear-gradient(hsl(0, 80%, 70%), #bada55);  /* For Firefox (3.6 to 15) */
        background-image: -o-linear-gradient(hsl(0, 80%, 70%), #bada55);
        background-image: linear-gradient(to bottom, hsl(0, 80%, 70%), #bada55); /* Standard syntax; must be last */
    }
    .ip {
        width: 400px;
        height: 30px;
        border-radius: 4px;
    }
    h2 {
        color: #000;
    }
    h2:hover {
        color: #fff;
        background-color: #000;
    }
</style>

<template>
    <div class="compA">
        <input class="ip" type="text" v-model="name">
        <h2>component A, say hello to {{name}}</h2>
    </div>
</template>

<script type="text/javascript">
    var $ = require('jquery');

    $(document).ready(function() {
        // 事件建议都在dom加载完成后执行
        // 在这里写事件...
        $('.compA h2').click(function() {
            $(this).css('color', 'blue');
        })
    });

    module.exports = {
        data: function() {
            return {
                name: 'vue'
            };
        }
    };
</script>