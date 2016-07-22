<style type="text/css">
    @import url('../less/index.less');
    .wrapper {
        margin-bottom: 70px;
    }
</style>

<template>
    <app-header></app-header>
    <div class="container wrapper">
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
                    <legend>i.glyForm title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
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
                    <legend>i.glyForm title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
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
                    <legend>i.glyForm title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
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
                    <legend>i.glyForm title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
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
                    <legend>i.glyForm title</legend>

                    <div class="form-group">
                        <label for="">label</label>
                        <input type="text" class="form-control" id="" placeholder="Input field">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
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
                    <legend>i.glyForm title</legend>

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

    require(['./header.vue', './footer.vue'], function(header, footer) {
        console.log(header.data())
        module.exports = {
            data: function() {
                console.log('header:', header.info);
                return {};
            },
            components: {
                'app-header': header,
                'app-footer': footer
            },
            route: {
                activate: function (transition) {
                    console.log('index-example activated!')
                    setTimeout(transition.next, 1000)
                },
                deactivate: function (transition) {
                    console.log('index-example deactivated!')
                    setTimeout(transition.next, 1000)
                }
            }
        };
    });

</script>
