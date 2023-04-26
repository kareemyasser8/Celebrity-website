var ErrorMsg = document.getElementsByClassName("Error-msg");
var TextInput = document.getElementsByClassName("form-text-inputs");
var SubmitBtn = document.getElementsByClassName("Submit")[0];
var Months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var WordDays = document.getElementById("WordDays");
var WordMonths = document.getElementById("WordMonths");
var MonthDays = document.getElementById("MonthDays");
var PremPrice = document.getElementById("PremPrice");
var Premavailable = document.getElementById("Premavailable");
var Silveravailble = document.getElementById("Silveravailble");
var HrsSlider = document.getElementById("HrsSlider");
var MinsSlider = document.getElementById("MinsSlider");


TextInput[0].onclick = function(){
	ErrorMsg[0].style.display = "none";
}

PremPrice.onclick = function(){
	ErrorMsg[1].style.display = "none";
}

Premavailable.onclick = function(){
	ErrorMsg[1].style.display = "none";
}

Silveravailble.onclick = function(){
	ErrorMsg[2].style.display = "none";
}


function getSelectedMonth(){
	var selectedIndex = WordMonths.selectedIndex;
//	console.log(Months[selectedIndex]);
	return selectedIndex + 1;
}

function getSelectedWordDays(){
	var selectedIndex = WordDays.selectedIndex;
	return WordDays.selectedIndex.value;
}

function getCurrentYear(){
	var currentYear = new Date().getFullYear();
	return currentYear;
}


function GetSuitableDays(){
	var DateString = getCurrentYear()+ "-" + getSelectedMonth() + "-1";
	var d = new Date(DateString);
	var pred = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
	
	var nowd;
	var saturdays = [];
	var sundays = [];
	var mondays = [];
	var tuesdays = [];
	var wednesdays = [];
	var thursdays = [];
	var fridays = [];

	for (i=1;i<=pred;i++) {

		nowd = new Date(d.getFullYear()+ "-" + (d.getMonth()+1) + "-" + i)

			if (nowd.getUTCDay() == 0)
			{
				mondays.push(i);

			}

			if (nowd.getUTCDay() == 1)
			{
				tuesdays.push(i);

			}

			if (nowd.getUTCDay() == 2)
			{
				wednesdays.push(i);

			}

			if (nowd.getUTCDay() == 3)
			{
				thursdays.push(i);

			}


			if (nowd.getUTCDay() == 4)
			{
				fridays.push(i);

			}


			if (nowd.getUTCDay() == 5)
			{
				saturdays.push(i);

			}

			if (nowd.getUTCDay() == 6)
			{	
				sundays.push(i);
			}

		}
	
		if(WordDays.value == "Sunday"){
			//console.log("SUN list : " +sundays);
			MonthDays.options.length = 0;
			for(var i = 0; i < sundays.length; i++){
				MonthDays.options[i] = new Option(sundays[i],sundays[i]);
			}
		}
		if(WordDays.value == "Monday"){
			//console.log("MON list : " +mondays);
			MonthDays.options.length = 0;
			for(var i = 0; i < mondays.length; i++){
				MonthDays.options[i] = new Option(mondays[i],mondays[i]);
			}
		}
		if(WordDays.value == "Tuesday"){
			//console.log("TUES list : " +tuesdays);
			MonthDays.options.length = 0;
			for(var i = 0; i < tuesdays.length; i++){
				MonthDays.options[i] = new Option(tuesdays[i],tuesdays[i]);
			}
		}
		if(WordDays.value == "Wednesday"){
			//console.log("WED list : " +wednesdays);
			MonthDays.options.length = 0;
			for(var i = 0; i < wednesdays.length; i++){
				MonthDays.options[i] = new Option(wednesdays[i],wednesdays[i]);
			}
		}
		if(WordDays.value == "Thursday"){
			//console.log("THURSDAY list : " + thursdays);
			MonthDays.options.length = 0;
			for(var i = 0; i < thursdays.length; i++){
				MonthDays.options[i] = new Option(thursdays[i],thursdays[i]);
			}
		}
		if(WordDays.value == "Friday"){
			//console.log("FRI list : " +fridays);
			MonthDays.options.length = 0;
			for(var i = 0; i < fridays.length; i++){
				MonthDays.options[i] = new Option(fridays[i],fridays[i]);
			}
		}
		if(WordDays.value == "Saturday"){
			//console.log("SAT list : " +saturdays);
			MonthDays.options.length = 0;
			for(var i = 0; i < saturdays.length; i++){
				MonthDays.options[i] = new Option(saturdays[i],saturdays[i]);
			}
		}
	
}


function setFieldsToTheCurrentDay(){
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getUTCMonth() + 1;
	var CurrentMonth = Months[month];
	var day = d.getDate();
	
	var weekday = new Array(7);
	weekday[0] =  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	
	
	var n = weekday[d.getDay()];
	WordDays.value = n;
	WordMonths.value = CurrentMonth;
	GetSuitableDays();
	MonthDays.value = day;
	
	
}

window.onload = function(){setFieldsToTheCurrentDay()};

WordDays.onchange = function(){GetSuitableDays()};

WordMonths.onchange = function(){GetSuitableDays()};


document.getElementById('HrsSlider').onkeypress =
  function (e) {
    var ev = e || window.event;
    if(ev.charCode < 48 || ev.charCode > 57) {
      return false; // not a digit
    } else if(this.value * 10 + ev.charCode - 48 > this.max) {
       return false;
    } else {
       return true;
    }
  }

document.getElementById('MinsSlider').onchange = function(){
	var currentValue = document.getElementById('MinsSlider').value;
	if(currentValue < 10){
		document.getElementById('MinsSlider').value = "0"+currentValue;
	}
}


document.getElementById('MinsSlider').onkeypress =
  function (e) {
    var ev = e || window.event;
    if(ev.charCode < 48 || ev.charCode > 57) {
      return false; // not a digit
    } else if(this.value * 10 + ev.charCode - 48 > this.max) {
       return false;
    } else {
       return true;
    }
  }

PremPrice.addEventListener('keydown', function PreventAlphabatics(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
         (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
         (key >= 35 && key <= 40) ||
         (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
         (key >= 96 && key <= 105)
       )) e.preventDefault();
});

Premavailable.addEventListener('keydown', function PreventAlphabatics(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
         (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
         (key >= 35 && key <= 40) ||
         (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
         (key >= 96 && key <= 105)
       )) e.preventDefault();
});

Silveravailble.addEventListener('keydown', function PreventAlphabatics(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
         (key == 65 && ( e.ctrlKey || e.metaKey  ) ) || 
         (key >= 35 && key <= 40) ||
         (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
         (key >= 96 && key <= 105)
       )) e.preventDefault();
});


function ReturnAllThingsToDefault(){
	TextInput[0].value = "";
	setFieldsToTheCurrentDay();
	HrsSlider.value = 7;
	MinsSlider.value = "00";
	PremPrice.value = "";
	Premavailable.value = "";
	Silveravailble.value = "";
}


SubmitBtn.onclick = function(){
	var checker = true;
	
	if(TextInput[0].value == ""){
		ErrorMsg[0].innerHTML = "*Please Enter the name of the event";
		ErrorMsg[0].style.display = "block";
		checker = false;
	}
	
	if(TextInput[0].value.length < 10 && TextInput[0].value.length > 0){
		ErrorMsg[0].innerHTML = "*The Event name is too short";
		ErrorMsg[0].style.display = "block";
		checker = false
	}
	
	if(PremPrice.value == "" || Premavailable.value == "" ){
		ErrorMsg[1].innerHTML = "*Please fill up the spaces";
		ErrorMsg[1].style.display = "block";
		checker = false
	}
	
	if(Silveravailble.value == ""){
		ErrorMsg[2].innerHTML = "*Please fill up the space";
		ErrorMsg[2].style.display = "block";
		checker = false
	}
	
	if(checker == true){
		alert("Event has been added to the database successfully");
		ReturnAllThingsToDefault();
	}
	
}





























//var weekday = new Array(7);
//weekday[0] =  "Sunday";
//weekday[1] = "Monday";
//weekday[2] = "Tuesday";
//weekday[3] = "Wednesday";
//weekday[4] = "Thursday";
//weekday[5] = "Friday";
//weekday[6] = "Saturday";
//
////var n = weekday[d.getDay()];
//
//var d = new Date("2019-7-14");
//var pred = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
//
//var nowd;
//var saturdays = [];
//var sundays = [];
//var mondays = [];
//var tuesdays = [];
//var wednesdays = [];
//var thursdays = [];
//var fridays = [];
//
//for (i=1;i<=pred;i++) {
//	
//    nowd = new Date(d.getFullYear()+ "-" + (d.getMonth()+1) + "-" + i)
//	
//	if (nowd.getUTCDay() == 0)
//    {
//		mondays.push(i);
//
//    }
//	
//	if (nowd.getUTCDay() == 1)
//    {
//		tuesdays.push(i);
//
//    }
//	
//	if (nowd.getUTCDay() == 2)
//    {
//		wednesdays.push(i);
//
//    }
//	
//	if (nowd.getUTCDay() == 3)
//    {
//		thursdays.push(i);
//
//    }
//	
//	
//	if (nowd.getUTCDay() == 4)
//    {
//		fridays.push(i);
//
//    }
//	
//
//    if (nowd.getUTCDay() == 5)
//    {
//		saturdays.push(i);
//
//    }
//
//    if (nowd.getUTCDay() == 6)
//    {	
//		sundays.push(i);
//    }
//
//}
//
//console.log("MON list : " +mondays);
//console.log("TUES list : " +tuesdays);
//console.log("WED list : " +wednesdays);
//console.log("FRI list : " +fridays);
//console.log("SAT list : " +saturdays);
//console.log("SUN list : " +sundays);


























