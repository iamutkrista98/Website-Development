/*JAVASCRIPT ON PRODUCTS PAGE: FORM VALIDATION FOR EMAIL ADDRESS PROVIDED ON BUILD DESKTOP SECTION*/
function validate(){

	var uemail = document.getElementById("email");
	if(uemail.value.trim()==""){

        alert("Enter valid email address");
        uemail.focus();
        return false;
	}
	var emails = f2.email.value;
	atpos = emails.indexOf("@");
	dotpos = emails.lastIndexOf(".");
	if(atpos < 1 || (dotpos - atpos < 2)){

		alert("Invalid Email");
		return false;
	}
	else{

		alert("Thank You For Your Submission, We Will Get Back To You With Price Quotations! Via Email");
        return true;
	}
}
/*JAVASCRIPT ON LOGIN PAGE TO TOGGLE BETWEEN LOGIN AND REGISTER*/

var x = document.getElementById("login");
var y = document.getElementById("register");
var z= document.getElementById("btncolor");
        
function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function login(){
	x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}


/*JAVASCRIPT ON TESTIMONIAL SECTION ALLOWING TO TOGGLE CLICKING ARROWS*/
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
window.onload = function () {
 
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
 
        currentActive = currentSlide;
 
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })
 
    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);
 
}
