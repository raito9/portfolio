import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

Vue.component('header',{
    template : '<script><html lang="zxx" class="no-js"><head><!-- Mobile Specific Meta --><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- Favicon-->
		<link rel="shortcut icon" href="./img/fav.png">
		<!-- Author Meta -->
		<meta name="author" content="codepixer">
		<!-- Meta Description -->
		<meta name="description" content="">
		<!-- Meta Keyword -->
		<meta name="keywords" content="">
		<!-- meta character set -->
		<meta charset="UTF-8">
		<!-- Site Title -->
		<title>Portfolio</title>

		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"> 
			<!--
			CSS
			============================================= -->
		</head>
		<body>
			<div class="protfolio-wrap">

			<!-- Start Header Area -->
        <div id="undefined-sticky-wrapper" class="sticky-wrapper" style="height: 56px;">
			<header class="default-header">
				<nav class="navbar navbar-expand-lg  navbar-light">
					<div class="container">
						  <a class="navbar-brand" href="index.html">
						  	<img src="./img/logo.png" alt="">
						  </a>
						  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span class="text-white lnr lnr-menu"></span>
						  </button>

						  <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
						    <ul class="navbar-nav">
								<li><a href="#home">Home</a></li>
								<li><a href="#portfolio">Portfolio</a></li>
								<li><a href="#service">Services</a></li>
								<li><a href="#testimonial">Testimonial</a></li>
							   <!-- Dropdown -->
							    <li class="dropdown">
							      <a class="dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
							        Pages
							      </a>
							      <div class="dropdown-menu">
							        <a class="dropdown-item" href="generic.html">Generic</a>
							        <a class="dropdown-item" href="elements.html">Elements</a>
								  </div>
								</li>	 
								<li><a href="../../logout.php">Logout</a></li>  
								<li><input type="text" placeholder="Zoeken" style="background-color:transparent; color:white; border:none;"/></li>
						    </ul>
						  </div>						
					</div>
				</nav>
		</header>

    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"> 

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
</style>'
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

