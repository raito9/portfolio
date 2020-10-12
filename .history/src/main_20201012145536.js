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

const superagent = require('superagent');

// callback
superagent
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
  .set('X-API-Key', 'foobar')
  .set('accept', 'json')
  .end((err, res) => {
    // Calling the end function will send the request
  });

// promise with then/catch
superagent.post('/api/pet').then(console.log).catch(console.error);

// promise with async/await
(async () => {
  try {
    const res = await superagent.post('/api/pet');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();