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
import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'
 
createApp(App).mount('#app')

Vue.use(VueSpotify, new Spotify())