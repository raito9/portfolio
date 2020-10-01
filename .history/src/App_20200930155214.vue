<template>
  <div id="app">
    <Header/>
    <Banner/>
    
  </div>

</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Portfolio,
    Service, 
    Services,
    Review,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
@import './css/animate.min.css';
@import './css/bootstrap.css';
@import './css/font-awesome.min.css';
@import './css/jquery.DonutWidget.min.css';
@import './css/jquerysctipttop.css';
@import './css/linearicons.css';
@import './css/magnific-popup.css';
@import './css/main.css';
@import './css/nice-select.css';
@import './css/owl.carousel.css';
</style>