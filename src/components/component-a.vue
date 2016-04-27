<style>
    .my-component h2 {
        color: red;
    }
</style>

<template lang="html">
    <div class="my-component">
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                msg: 'hello!'
            }
        }
    };
</script>