const body = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

$(window).scroll(function(){
	let wScroll = $(this).scrollTop();
	if (wScroll == lastScroll ){
		body.style.background = "#0000009e";
	}else {
		body.style.background = "#ffffff00";
	}
});

// Navbar Responsive
var isActive = false;
$('.menu').on('click',function(){
    if(isActive){
        $(this).removeClass('active');
        $('body').removeClass('menu-open');
        $('html').removeClass('hidden');
    }else{
        $(this).addClass('active');
		$('body').addClass('menu-open');
        $('html').addClass('hidden');
    }
    isActive = !isActive;
});

$('.nav-mobile ul li a').on('click',function(){
	if(isActive){
		$('.menu').removeClass('active');
		$('body').removeClass('menu-open');
		$('html').removeClass('hidden');
	}else{
		$('body').addClass('menu-open');
		$('html').addClass('hidden');
	}
});

var typing=new Typed(".text", {
	strings: ["Frontend Web Developer","Freelancer"],
	typeSpeed: 100,
	backSpeed: 40,
	loop: true,
});


// Project Section
$(document).on('click','.portfolio-filter li',function(){
	$(this).addClass('portfolio-filter-active').siblings().removeClass('portfolio-filter-active')
});

$(document).ready(function(){
$('.list').click(function(){
	const value = $(this).attr('data-filter');
	if(value == 'all'){
		$('.portfolio-box').show('1000');
	}
	else{
		$('.portfolio-box').not('.'+value).hide('1000');
		$('.portfolio-box').filter('.'+value).show('1000');
	}
});
});


// certificate hover
$(".sert").hover(
	function () {
		$(this).addClass('hover');
		$(this,"img").css("filter", "brightness(50%)");
	}, 
	function () {
		$(this).removeClass('hover');
		$(this,"img").css("filter", "brightness(90%)");
	}
);


// Contact Section
const inputs = document.querySelectorAll(".input");

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc() {
	let parent = this.parentNode;
	if (this.value == "") {
    parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});


// Scroll to top button
const scrollBtn = document.querySelector(".scroll-to-top");
scrollBtn.addEventListener('click',() =>{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}


$(".scroll-to-top").hover(
	function () {
		$(".Back-to-Top").css("display", "block");
	}, 
	function () {
		$(".Back-to-Top").css("display", "none");
	}
);