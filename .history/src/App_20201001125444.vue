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
import Header from './components/header.vue'
import Banner from './components/banner.vue'
import Portfolio from './components/portfolio.vue'
import Service from './components/service.vue'
import Services from './components/services.vue'
import Review from './components/review.vue'
import Footer from './components/footer.vue'

export default {
  data() {
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