import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })

<script>
    new Vue({
        el: 'App'
    })
</script>
