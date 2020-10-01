<template>
  <div id="app">
    <Header/>
    <Banner/>
    <Portfolio/>
    <Service/>
    <Services/>
    <Review/>
    <Footer/>
  </div>

</template>

<script>
import header from './components/header.vue'
import banner from './components/banner.vue'
import portfolio from './components/portfolio.vue'
import service from './components/service.vue'
import services from './components/services.vue'
import review from './components/review.vue'
import footer from './components/footer.vue'

export default {
  data() {
    return {
      message: 'Hello World',
    };
  },
  name: 'App',
  components: {
    Header,
    Banner,
    Portfolio,
    Service, 
    Services,
    Review,
    Footer,
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