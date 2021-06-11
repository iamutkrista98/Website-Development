/*Products Page*/
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
/*Login Page*/

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