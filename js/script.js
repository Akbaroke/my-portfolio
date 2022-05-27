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


// Preload
let loader = document.getElementById("preload");
window.addEventListener("load", function(){
	loader.style.display = "none";
	$('html').removeClass('hidden');
})


// Send Email to Google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyTU2sjHjxpQ5odcoCJvdpvZejpCG2gscKL6LJlY3hKIyzYcAAGGXmvFtB-Uk7gNKHP/exec';
const form = document.forms['myportfolio-contact-form'];
const btnsend = document.querySelector('.btn');
const btnloading = document.querySelector('.loading-form');
const myalert = document.querySelector('.alert');
const alertfailed1 = document.querySelector('.alert-failed1');
const alertfailed2 = document.querySelector('.alert-failed2');
const alertfailed3 = document.querySelector('.alert-failed3');
const alertfailed4 = document.querySelector('.alert-failed4');
const alertfailed5 = document.querySelector('.alert-failed5');

form.addEventListener('submit', e => {
	e.preventDefault()
	myalert.style.display = "none";
	alertfailed1.style.display = "none";
	alertfailed2.style.display = "none";
	alertfailed3.style.display = "none";
	alertfailed4.style.display = "none";
	alertfailed5.style.display = "none";
	let Xname = document.forms['myportfolio-contact-form']['name'].value;
	let Xemail = document.forms['myportfolio-contact-form']['email'].value;
	let Xphone = document.forms['myportfolio-contact-form']['phone'].value;
	let Xmessage = document.forms['myportfolio-contact-form']['message'].value;
	if (Xname == ''){
		alertfailed1.style.display = "block";
		return false;
	} else if ( Xemail == ''){
		alertfailed2.style.display = "block";
		return false;
	} else if ( Xphone == ''){
		alertfailed3.style.display = "block";
		return false;
	} else if ( Xmessage == ''){
		alertfailed4.style.display = "block";
		return false;
	} else{
		btnsend.style.visibility = "hidden";
		btnloading.style.display = "block";
		fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
			btnsend.style.visibility = "visible";
			btnloading.style.display = "none";
			myalert.style.display = "block";
			form.reset();
			$(".input-container").removeClass('focus');
			console.log('Success!', response);
		})
		.catch(error => {
			alertfailed5.style.display = "block";
			console.error('Error!', error.message);
		})
	}
})

const destalert = document.querySelector('.destalert');
const destalert1 = document.querySelector('.destalert1');
const destalert2 = document.querySelector('.destalert2');
const destalert3 = document.querySelector('.destalert3');
const destalert4 = document.querySelector('.destalert4');
const destalert5 = document.querySelector('.destalert5');
destalert.addEventListener("click", function(){
	myalert.style.display = "none";
})
destalert1.addEventListener("click", function(){
	alertfailed1.style.display = "none";
})
destalert2.addEventListener("click", function(){
	alertfailed2.style.display = "none";
})
destalert3.addEventListener("click", function(){
	alertfailed3.style.display = "none";
})
destalert4.addEventListener("click", function(){
	alertfailed4.style.display = "none";
})
destalert5.addEventListener("click", function(){
	alertfailed5.style.display = "none";
})