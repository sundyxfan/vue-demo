<style type="text/css">

</style>

<template>
    <app-header></app-header>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <form action="" method="POST" role="form">
                    <legend>Form title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col-md-3">
                <form action="" method="POST" role="form">
                    <legend>Form title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
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
