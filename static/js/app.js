Vue.component('app-nav', {
    template: '\
        <nav class="navbar navbar-full navbar-dark bg-inverse">\
            <a class="navbar-brand" href="#">Snip&nbsp;<i class="fa fa-scissors" aria-hidden="true"></i>&nbsp;Snip</a>\
            <ul class="nav navbar-nav">\
                <li class="nav-item active">\
                    <router-link to="/" class="nav-link">Home</router-link>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="#">Link</a>\
                </li>\
                <li class="nav-item">\
                    <a class="nav-link" href="#">Link</a>\
                </li>\
                <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>\
                    <div class="dropdown-menu" aria-labelledby="supportedContentDropdown">\
                        <a class="dropdown-item" href="#">Action</a>\
                        <a class="dropdown-item" href="#">Another action</a>\
                        <a class="dropdown-item" href="#">Something else here</a>\
                    </div>\
                </li>\
            </ul>\
            <form class="form-inline float-xs-right">\
                <input class="form-control" type="text" placeholder="Search">\
                <button class="btn btn-outline-success" type="submit">Search</button>\
            </form>\
        </nav>'
});

Vue.component('snippet-form', {
    template: ''
});

var Main = {};
var routes = [
    {path: '/', component: Main}
]

var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    el: '#app',
    router: router,
    data: {
        message: "Recent Snippets",
        loading: true,
        snippets: []
    },
    created: function onCreate() {
        axios.get('/api/snippets/').then(function (response) {
            this.snippets = response.data.results;
        }.bind(this))
    },
    mounted: function onMount () {
        this.loading = false;
    }
});