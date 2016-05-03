// 创建实例
var v1 = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverse: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

v1.reverse();

// 创建实例
var v2 = new Vue({
    el: '#demo2',
    data: function() {
        return {
            newTodo: '',
            todos: [
                { text: 'hello world' },
                { text: 'hello vue' },
                { text: 'hello angularjs' }
            ]
        };
    },
    methods: {
        removeTodo: function(i) {
            this.todos.splice(i, 1);
        },
        addTodo: function(val) {
            console.log(val);
            var txt = this.newTodo.trim() || val;
            if (!!txt) {
                this.todos.push({
                    text: txt
                });
                this.todos.newTodo = '';
            }
        }
    }
});

v2.addTodo('add by js');

// 构造器 -- 构造组件
var myComponent = Vue.extend({
    el: function() {
        return 'my-comp';
    },
    template: '<p v-show="ishidden">show or not {{msg|capitalize}}{{{htm}}}</p>',
    data: function() {
        return {
            msg: 'hello',
            ishidden: true,
            htm: '<h2>vue demo</h2>'
        };
    },
    methods: {
        show: function() {
            alert(this.msg);
        },
        alertMsg: function(txt) {
            if (!!txt) {
                this.msg = txt;
                this.ishidden = true;
                this.show.call(this);
                txt = null;
            }

        }
    },
    created: function() {
        this.msg = 'initial';
        // this.show();
    },
    compile: function() {
        this.msg = 'compiled';
    }
});

// 创建实例
var mc = new myComponent();
// mc.show();
// mc.alertMsg('alert message');

var compA = Vue.extend({
    template: '<h2 msg="abc">comp A , say {{msg1}}</h2>',
    props: ['msg1'],
    data: function() {
        return {
            msg1: 'vue'
        };
    }
});

var compB = Vue.extend({
    template: '<h2>comp B , say {{msg2}}</h2>',
    props: ['msg2'],
    data: function() {
        return {
            msg2: 'angular'
        };
    }
});

var comps = Vue.extend({
    template: '<div>{{msg1}}{{typeof msg2}}<a-a></a-a><b-b></b-b></div>',
    props: ['msg1', 'msg2'],
    components: {
        'a-a': compA,
        'b-b': compB
    }
});
Vue.component('comps', comps);


var cc = Vue.extend({
    props: {
        'myMessage': Number
    },
    template: 'Hello<span>{{ myMessage}}</span><input v-model="myMessage"/>',
    methods: {
        setMsg: function(msg) {
            this.myMessage = msg;
        }
    }
});
Vue.component('child', cc);
var vm = new Vue({
    el: 'body',
    data: function() {
        return {
            parentMsg: 12,
            currentView: 'home'
        };
    },
    components: {
        home: compA,
        posts: compB
    },
    methods: {
        change: function() {
            this.currentView = this.currentView == 'home' ? 'posts' : 'home';
        }
    }
});
var vm1 = new Vue({
    el: '#example1',
    data: function() {
        return {
            msg: '12asdas3'
        };
    }
});
Vue.nextTick(function() {
    vm1.$el.textContent = 'halo wolrd';
});
