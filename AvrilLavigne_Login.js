var login_btn = document.getElementsByClassName("website-logo")[0];
var Modal_holder = document.getElementsByClassName("login_modal")[0];
var login_close_icon = document.getElementsByClassName("login-close-icon")[0];
var login_page_wrapper = document.getElementsByClassName("login-page-wrapper")[0];

var UserName_login_field = document.getElementsByClassName("UserName-login-field")[0];
var Password_login_field = document.getElementsByClassName("Password-login-field")[0];
var Login_Error_msg = document.getElementsByClassName("Login-Error-msg")[0];
var Login_btn_page = document.getElementsByClassName("Login_btn_page")[0];

var login_nav = document.getElementById("login_nav");


login_btn.addEventListener("click",function(){
	Modal_holder.style.display = "flex";
	login_page_wrapper.style.marginTop = "100px";
	Login_Error_msg.style.display = "none";
	UserName_login_field.value = "";
	Password_login_field.value = "";
	$(login_page_wrapper).animate({opacity: '1',marginTop: '0px'},350);
})


login_nav.addEventListener("click",function(){
	Modal_holder.style.display = "flex";
	login_page_wrapper.style.marginTop = "100px";
	Login_Error_msg.style.display = "none";
	UserName_login_field.value = "";
	Password_login_field.value = "";
	$(login_page_wrapper).animate({opacity: '1',marginTop: '0px'},350);
})


Login_btn_page.addEventListener("click",function(){
	if(UserName_login_field.value == "" || Password_login_field.value == ""){
		Login_Error_msg.style.display = "block";
		Login_Error_msg.innerHTML = "*Please fill out empty fields";
	}
})

login_close_icon.addEventListener("click",function(){
	$(login_page_wrapper).animate({opacity: '0',marginTop: '100px'},350);
	$(Modal_holder).fadeOut(400);
//	Modal_holder.style.display = "none";
})