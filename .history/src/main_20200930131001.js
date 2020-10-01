import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })


new Vue({
        el: '#Header'
})

