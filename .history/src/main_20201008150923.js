// import Vue from 'vue'
// import App from './App'

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

import { createApp } from 'vue'
import App from './App.vue'
var http = require('http')

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);
createApp(App).mount('#app')