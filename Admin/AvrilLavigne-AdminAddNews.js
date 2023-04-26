function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
	  $('#blah').css("display", "block");
    }
    
    reader.readAsDataURL(input.files[0]);
	  
  }
}

$("#imgInp").change(function() {
  readURL(this);
});


var NewsTitle = document.getElementById("NewsTitle");
var NewsDescription = document.getElementById("NewsDescription");
var AddImageBtn = document.getElementById("imgInp");
var Submit = document.getElementsByClassName("Submit")[0];
var Error_msg = document.getElementsByClassName("Error-msg");


function ReturnAllthingsToDefault(){
	NewsTitle.value = "";
	NewsDescription.value = "";
	AddImageBtn.value = "";
	$('#blah').css("display", "none");
}

Submit.onclick = function(){
	var checker = true;
	if(NewsTitle.value == ""){
		Error_msg[0].innerHTML = "*Please Enter the title";
		Error_msg[0].style.display = "block";
		checker = false;
	}
	
	if(NewsTitle.value.length > 0 && NewsTitle.value.length < 10){
		Error_msg[0].innerHTML = "*The Title is too short";
		Error_msg[0].style.display = "block";
		checker = false;
	}
	
	if(NewsDescription.value == ""){
		Error_msg[1].innerHTML = "*Please Enter the description";
		Error_msg[1].style.display = "block";
		checker = false;
	}
	
	
	if(AddImageBtn.value == ""){
		Error_msg[2].innerHTML = "*Please Insert an image";
		Error_msg[2].style.display = "block";
		checker = false;
	}
	
	if(checker == true){
		alert("The News has been added to the database Successfully!!");
		ReturnAllthingsToDefault();
	}
}


NewsTitle.onclick = function(){Error_msg[0].style.display = "none";}
NewsDescription.onclick = function(){Error_msg[1].style.display = "none";}
AddImageBtn.onclick = function(){Error_msg[2].style.display = "none";}








//--------------------------------------------------------------------

//function to get the current date

//var today = new Date();
//var dd = String(today.getDate()).padStart(2, '0');
//var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//var yyyy = today.getFullYear();
//
//today = mm + '/' + dd + '/' + yyyy;
//
//var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//var d = new Date();
//var dayName = days[d.getDay()];
//
//alert("Today is "+ dayName + " and the date is " + today);

//--------------------------------------------------------------------