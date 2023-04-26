var Submit = document.getElementsByClassName("Submit")[0];
var InputField = document.getElementsByClassName("register-inputs");
var ErrorMsg = document.getElementsByClassName("Error-msg");
var GenderRadioBtn = document.getElementsByClassName("radio_btn");


InputField[2].addEventListener('keydown', function(e) {
    var key   = e.keyCode ? e.keyCode : e.which;

    if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
         (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
         (key >= 35 && key <= 40) ||
         (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
         (key >= 96 && key <= 105)
       )) e.preventDefault();
});


function returnToDefault(){
	InputField[0].value = "";
	InputField[1].value = "";
	GenderRadioBtn[0].checked = false;
	GenderRadioBtn[1].checked = false;
	InputField[2].value = "";
	InputField[3].value = "";
	InputField[4].value = "";
}


Submit.addEventListener("click",function(){
	var checker = true;
	if(InputField[0].value == ""){
		ErrorMsg[0].innerHTML = "*Please Enter the first name";
		ErrorMsg[0].style.display = "block";
		checker = false;
	}
	
	
	if(InputField[0].value.length > 0 && InputField[0].value.length < 3){
		ErrorMsg[0].innerHTML = "*First name is too short";
		ErrorMsg[0].style.display = "block";
		checker = false;
	}
	
	if(InputField[1].value == ""){
		ErrorMsg[1].innerHTML = "*Please Enter the last name";
		ErrorMsg[1].style.display = "block";
		checker = false;
	}
	
	
	if(InputField[1].value.length > 0 && InputField[1].value.length < 3){
		ErrorMsg[1].innerHTML = "*Last name is too short";
		ErrorMsg[1].style.display = "block";
		checker = false;
	}
	
	
	if(!GenderRadioBtn[0].checked && !GenderRadioBtn[1].checked){
		ErrorMsg[2].innerHTML = "*Please Select the gender";
		ErrorMsg[2].style.display = "block";
		checker = false;
	}
	
	if(InputField[2].value == ""){
		ErrorMsg[3].innerHTML = "*Please Enter the age";
		ErrorMsg[3].style.display = "block";
		checker = false;
	}
	
	if(InputField[3].value == ""){
		ErrorMsg[4].innerHTML = "*Please Enter the username";
		ErrorMsg[4].style.display = "block";
		checker = false;
	}
	
	if(InputField[3].value.length > 0 && InputField[3].value.length < 5){
		ErrorMsg[4].innerHTML = "*Username is too short";
		ErrorMsg[4].style.display = "block";
		checker = false;
	}
	
	if(InputField[4].value == ""){
		ErrorMsg[5].innerHTML = "*Please Enter the password";
		ErrorMsg[5].style.display = "block";
		checker = false;
	}
	
	
	if(InputField[4].value.length > 0 && InputField[4].value.length < 5){
		ErrorMsg[5].innerHTML = "*Password is too short";
		ErrorMsg[5].style.display = "block";
		checker = false;
	}
	
	if(checker == true){
		alert("Congratulations, your account have been created");
		returnToDefault();
	}
	
	
})


InputField[0].onclick = function(){
	ErrorMsg[0].style.display = "none";
}


InputField[1].onclick = function(){
	ErrorMsg[1].style.display = "none";
}


GenderRadioBtn[0].onclick = function(){
	ErrorMsg[2].style.display = "none";
}


GenderRadioBtn[1].onclick = function(){
	ErrorMsg[2].style.display = "none";
}


InputField[2].onclick = function(){
	ErrorMsg[3].style.display = "none";
}

InputField[3].onclick = function(){
	ErrorMsg[4].style.display = "none";
}

InputField[4].onclick = function(){
	ErrorMsg[5].style.display = "none";
}

























