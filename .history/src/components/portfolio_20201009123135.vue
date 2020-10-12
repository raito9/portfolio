<template>
    <section class="portfolio-area section-gap" id="portfolio">
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div class="menu-content col-lg-10">
					<div class="title text-center">
						<h1 class="mb-10">This is what we can do for you</h1>
							<p>Who are in extremely love with eco friendly system..</p>
					</div>
				</div>
			</div>
				    
			<div class="filters">
				<ul>
				    <li class="active" data-filter="*">All</li>
				    <li data-filter=".corporate">Vector</li>
				    <li data-filter=".personal">Raster</li>
				    <li data-filter=".agency">UI/UX</li>
				    <li data-filter=".portal">Printing</li>
				</ul>
			</div>
				    
			<div class="filters-content" onclick="myFunction()">
				<div class="row grid">
				    <div class="single-portfolio col-sm-4 all corporate">
				        <div class="item">
				            <img src="../img/p1.jpg" alt="Work 1">
				                <div class="p-inner">
				                    <h4>3D Helmet Design</h4>
				                        <div class="cat">Corporate</div>
				                </div>
				    </div>
				</div>
			<div class="single-portfolio col-sm-4 all personal" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p2.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h4>2D Vinyl Design</h4>
				                <div class="cat">Personal
                                </div>
				    </div>
			</div>
			</div>
			<div class="single-portfolio col-sm-4 all agency" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p3.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h5>Creative Poster Design</h5>
				                <div class="cat">Agency
                                </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all portal" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p4.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h5>Embosed Logo Design</h5>
				                <div class="cat">Portal
                                </div>
				        </div>
				</div>
			</div>
            <div class="single-portfolio col-sm-4 all corporate" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p5.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h4>3D Helmet Design</h4>
				                <div class="cat">Corporate
                                </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all personal" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p6.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h4>2D Vinyl Design</h4>
				                <div class="cat">Personal
                                    </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all agency" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p2.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h5>Creative Poster Design</h5>
				                <div class="cat">Agency
                                </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all portal" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p3.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h5>Embosed Logo Design</h5>
				                <div class="cat">Portal</div>
				        </div>
				</div>
			</div>		
			<div class="single-portfolio col-sm-4 all corporate" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p4.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h4>3D Helmet Design</h4>
				                <div class="cat">Corporate
                                </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all personal" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p3.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h4>2D Vinyl Design</h4>
				                <div class="cat">Personal
                                </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all agency" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p2.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h5>Creative Poster Design</h5>
				                <div class="cat">Agency
                                </div>
				        </div>
				</div>
			</div>
			<div class="single-portfolio col-sm-4 all portal" onclick="myFunction()">
				<div class="item">
				    <img src="../img/p1.jpg" alt="Work 1">
				        <div class="p-inner">
				            <h5>Embosed Logo Design</h5>
				                <div class="cat">Portal
                                </div>
				        </div>
				</div>
			</div>					        		        
		        </div>
	        </div>
        </div>
    </section>

    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"> 

</template>

<script>

function myFunction() {
  document.getElementById("panel").style.display = "block";
}

export default {
  name: 'Portfolio'
}
</script>

<script>
function myFunction() {
  document.getElementById("panel").style.display = "block";
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
@import '../css/animate.min.css';
@import '../css/bootstrap.css';
@import '../css/font-awesome.min.css';
@import '../css/jquery.DonutWidget.min.css';
@import '../css/jquerysctipttop.css';
@import '../css/linearicons.css';
@import '../css/magnific-popup.css';
@import '../css/main.css';
@import '../css/nice-select.css';
@import '../css/owl.carousel.css';
</style>