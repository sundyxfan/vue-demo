<style type="text/css">

</style>

<template>
    <app-header></app-header>
    <div class="container">
        <div class="row">
            <div class="col-md-offset-4 col-md-4">
                <form action="" method="POST" role="form">
                    <legend>Sign in / Registry</legend>

                    <div class="form-group">
                        <label for="">Username</label>
                        <input type="text" class="form-control" id="" placeholder="write your favor name">
                    </div>

                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="text" class="form-control" id="" placeholder="type your password">
                    </div>


                    <button type="submit" class="btn btn-default">Registry</button>
                    <button type="submit" class="btn btn-primary">Logo</button>
                </form>
            </div>
        </div>
    </div>
    <app-footer></app-footer>
</template>

<script type="text/javascript">
    var header = require('./header.vue'),
        footer = require('./footer.vue');

    module.exports = {
        components: {
            'app-header': header,
            'app-footer': footer
        }
    };
</script>