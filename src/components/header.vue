<template>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">{{brand}}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a v-link="{ path: '/foo' }">Angular</a></li>
                    <li><a v-link="{ path: '/bar' }">Vue</a></li>
                </ul>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">{{link1}}</a></li>
                    <li class="dropdown">
                        <a href="{{linkSub.url}}" class="dropdown-toggle" data-toggle="dropdown">{{linkSub.title}} <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li v-for="item in linkSub.list"><a href="{{item.url}}">{{item.title}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                brand: '卖家中心123',
                link1: 'Bootstrap',
                linkSub: {
                    title: 'LinkSub',
                    url: '#',
                    list: [
                        {
                            title: 'Action',
                            url: '#'
                        },
                        {
                            title: 'Another action',
                            url: '#'
                        },
                        {
                            title: 'Something else here',
                            url: '#'
                        }
                    ]
                }
            };
        }
    }

</script>
