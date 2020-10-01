import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

Vue.component('testcomponent',{
    template : '<div><h1>This is coming from component</h1></div>'
 });
 var vm = new Vue({
    el: '#component_test'
 });
 var vm1 = new Vue({
    el: '#component_test1'
 });

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })


new Vue({
    el: '#header',
    components: { Header },
    template: '<Header/>'
})

