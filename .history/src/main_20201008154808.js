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
import '../js/http.js'

createApp(App).mount('#app')