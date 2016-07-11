<style type="text/css" scoped>
    .navbar img {
        display: inline-block !important;
        margin-right: 10px;
    }
</style>

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
                <a class="navbar-brand" href="{{site.url}}">
                    <img :src="site.logo" alt="Logo">
                    {{site.name}}
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <li v-for="nav in navs">
                        <template v-if="!!nav.subs.length">
                            <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button">{{nav.name}}<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li v-for="item in nav.subs"><a href="{{item.url}}">{{item.name}}</a></li>
                            </ul>
                        </template>
                        <template v-else>
                            <a href="{{nav.url}}">{{nav.name}}</a>
                        </template>
                    </li>
                </ul>
                <!-- <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form> -->
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                            <img :src="userInfo.avatar" alt="用户头像">
                            {{userInfo.name}}<span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="item in userInfo.subs"><a href="{{item.url}}">{{item.name}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>

<script type="text/javascript">
    /**
     * [exports description]
     * @type {Object}
     * 每个链接添加icon
     * 页面切换导航，页面刷新，页面跳转等情况下导航激活状态的改变
     */
    module.exports = {
        data: function() {
            return {
                site: {
                    name: '葡萄生活CMS',
                    logo: '../image/baby2.jpg',
                    url: '#'
                },
                navs: [
                    {
                        name: '服务',
                        url: '/service/',
                        subs: [
                            {
                                name: '/话费',
                                url: '/service/phone-fare/'
                            },
                            {
                                name: '大保健',
                                url: '/service/health-care/'
                            }
                        ]
                    },
                    {
                        name: '商品',
                        url: '/goods/',
                        subs: [
                            {
                                name: '商品一',
                                url: '/goods/one/'
                            },
                            {
                                name: '商品二',
                                url: '/goods/two/'
                            }
                        ]
                    },
                    {
                        name: '商家',
                        url: '/bussiness/',
                        subs: [
                            {
                                name: '商家一',
                                url: '/bussiness/one/'
                            },
                            {
                                name: '商家二',
                                url: '/bussiness/two/'
                            }
                        ]
                    }
                ],
                userInfo: {
                    name: 'userName',
                    avatar: '../image/baby2.jpg',
                    subs: [
                        {
                            name: '账户管理',
                            url: '/info/settings/'
                        },
                        {
                            name: '记录中心',
                            url: '/history-info/'
                        },
                        {
                            name: '退出',
                            url: '/loginout/'
                        }
                    ]
                }
            };
        }
    }
</script>
