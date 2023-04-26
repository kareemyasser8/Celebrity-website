var Events_Locations = ["Paramount Theatre, Seattle","Fox Theater - Oakland, Oakland","Greek Theater, Los Angeles",
			  "State Theater, Minneapolis","The Chicago Theatre, Chicago","The Rooftop at Pier 17, New York"];

var Events_date = ["Sat, Sep 14 • 8:00 pm","Tue, Sep 17 • 8:00 pm","Wed, Sep 18 • 7:30 pm","Tue, Sep 24 • 8:00 pm",
				  "Thu, Sep 26 • 8:00 pm","Tue, Oct 01 • 7:30 pm"]; 


var Event_row = document.getElementsByClassName("Event-row");
var EventIndex;

var Tickets_wrapper = document.getElementById("Tickets-wrapper");

var Calender_design_event_month = document.getElementsByClassName("event-month");
var Calender_design_event_day = document.getElementsByClassName("event-day");

var Event_detail_location = document.getElementsByClassName("Event-detail-location");
var Event_detail_date = document.getElementsByClassName("Event-detail-date");
var Event_detail_price = document.getElementsByClassName("detail-price");
var Event_details_section = document.getElementsByClassName("Event-details");
var Event_details_Card = document.getElementsByClassName("Event-details-Card");

var Find_Tickets_btn = document.getElementsByClassName("Find-Tickets-btn");
var Find_Tickets_btn_x = document.getElementsByClassName("Find-Tickets-btn-x");



//for the details part wide screen
var Event_detail_location = document.getElementsByClassName("Event-detail-location");
var Event_detail_date = document.getElementsByClassName("Event-detail-date");



//for the details part small screen
var Event_location = document.getElementsByClassName("Event-location");
var Event_details_small_size = document.getElementsByClassName("Event-details-small-size");


//for the details part tickets page
var eplace = document.getElementsByClassName("eplace");
var etime = document.getElementsByClassName("etime");

var eIndex;



Find_Tickets_btn[0].addEventListener("click",function(){
	Tickets_wrapper.style.display = "block";
	ReturnToDefault();
	eplace[0].innerHTML = Event_detail_location[0].innerHTML;
	etime[0].innerHTML = Event_detail_date[0].innerHTML;
});

function Event_details_Animation_effect(){
	
	if($(window).width() > 770){
		Event_details_section[0].style.top = "30px";
		Event_details_section[0].style.opacity = "0";
		$(Event_details_section).animate({top: '0px', opacity: '1'},340);
	}
}


function EventRowDefaultColor(){
	for(var i = 0; i < Event_row.length; i++){
		Event_row[i].style.backgroundColor="";
	}
}


for(var i =0; i < Find_Tickets_btn_x.length; i++){
	Find_Tickets_btn_x[i].onclick = function(){
		eIndex = $(Find_Tickets_btn_x).index(this);
		ReturnToDefault();
		eplace[0].innerHTML = Event_location[eIndex].innerHTML;
		etime[0].innerHTML = Event_details_small_size[eIndex].innerHTML;
		Tickets_wrapper.style.display = "block";
	}
}

for(var i = 0; i < Event_row.length; i++){

		Event_row[i].onclick = function(){
			EventIndex = $(this).index();
//			console.log(EventIndex);
			Event_details_Card[0].style.display = "block";
			EventRowDefaultColor();
			Event_detail_location[0].innerHTML = Events_Locations[EventIndex];
			Event_detail_date[0].innerHTML = Events_date[EventIndex];
			var Month = Events_date[EventIndex].substring(5,8);
			Calender_design_event_month[6].innerHTML = Month;
			Calender_design_event_month[6].style.textTransform="uppercase";
			var Day = Events_date[EventIndex].substring(9,11);
			Calender_design_event_day[6].innerHTML = Day;
			Event_row[EventIndex].style.backgroundColor = "#161618";
			Event_details_Animation_effect()
		}
}

var SilverPrice = 50;
var PremiumPrice = 2*SilverPrice;

var Drop_down_list = document.getElementsByClassName("Drop-down-list");

var PremiumBtn = document.getElementsByClassName("radio_btn")[0];
var SilverBtn = document.getElementsByClassName("radio_btn")[1];


PremiumBtn.onclick = function(){
	Error_msg[0].style.display = "none";
	Drop_down_list[0].selectedIndex = 0;
	var price = PremiumPrice * 1;
	document.getElementsByClassName("priceNum")[0].innerHTML = price+ " $";
}

SilverBtn.onclick = function(){
	Error_msg[0].style.display = "none";
	Drop_down_list[0].selectedIndex = 0;
	var price = SilverPrice * 1;
	document.getElementsByClassName("priceNum")[0].innerHTML = price+ " $";
}

Drop_down_list[0].onchange = function EditPriceText(){           
    var price;
        if (PremiumBtn.checked){
             var selectedValue = Drop_down_list[0].value;
             price = PremiumPrice * selectedValue;
             document.getElementsByClassName("priceNum")[0].innerHTML = price+ " $";
         }
         else if (SilverBtn.checked){
               var selectedValue = Drop_down_list[0].value;
               price = SilverPrice * selectedValue
               document.getElementsByClassName("priceNum")[0].innerHTML = price + " $";
         }
};


var VisaButton = document.getElementsByClassName("radio_btn")[2];
var MasterCardButton = document.getElementsByClassName("radio_btn")[3];
var PaypalButton = document.getElementsByClassName("radio_btn")[4];


 var EnterCardNumber = document.getElementById("Card-details-a");
var EnterCardSecurityID = document.getElementById("Card-details-b");


VisaButton.onclick = function(){
	EnterCardNumber.innerHTML = "Enter your Visa Card Number";
    EnterCardSecurityID.innerHTML = "Enter your Visa Card Security ID";
}

MasterCardButton.onclick = function(){
	EnterCardNumber.innerHTML = "Enter your MasterCard Card Number";
    EnterCardSecurityID.innerHTML = "Enter your MasterCard Card Security ID";

}

PaypalButton.onclick = function(){
	EnterCardNumber.innerHTML = "Enter your Paypal Card Number";
    EnterCardSecurityID.innerHTML = "Enter your Paypal Card Security ID";

}


var Error_msg = document.getElementsByClassName("Error-msg");
var Submit = document.getElementsByClassName("Submit")[0];
var Input = document.getElementsByClassName("Input");

Submit.onclick = function BookEventValidation(){
	
	var checker = true;
	
	if(!PremiumBtn.checked && !SilverBtn.checked){
		Error_msg[0].innerHTML = "*Please select the Ticket type";
		Error_msg[0].style.display = "block";
		checker = false;
	}
	if(!VisaButton.checked && !MasterCardButton.checked && !PaypalButton.checked){
		Error_msg[2].innerHTML = "*Please select the payment method";
		Error_msg[2].style.display = "block";
		checker = false;
	}
	if(Input[0].value == ""){
		Error_msg[3].innerHTML = "*Please enter the card number";
		Error_msg[3].style.display = "block";
		checker = false;
	}
	
	if(Input[0].value.length > 0 && Input[0].value.length != 16){
		Error_msg[3].innerHTML = "*The card number should have 16 digits";
		Error_msg[3].style.display = "block";
		checker = false;
	}
	
	if(Input[0].value.length == 16){
		for(var i = 0; i < 16; i++){
			if(isNaN(Input[0].value.charAt(i))){
				Error_msg[3].innerHTML = "*The card number shouldn't have characters";
				Error_msg[3].style.display = "block";
				checker = false;
			}
		}
	}
	
	if(Input[1].value == ""){
		Error_msg[4].innerHTML = "*Please enter the security number";
		Error_msg[4].style.display = "block";
		checker = false;
	}
	
	if(Input[1].value.length > 0 && Input[1].value.length != 4){
		Error_msg[4].innerHTML = "*The security number should have 4 digits";
		Error_msg[4].style.display = "block";
		checker = false;
	}
	
	if(Input[1].value.length == 4){
		for(var i = 0; i < 4; i++){
			if(isNaN(Input[1].value.charAt(i))){
				Error_msg[4].innerHTML = "*The security number shouldn't have characters";
				Error_msg[4].style.display = "block";
				checker = false;
			}
		}
	}
	
	if(checker == true){
		alert("Ticket Transaction is done Successfully!");
	}
}


Input[0].onclick = function(){
	Error_msg[3].style.display = "none";
}

Input[1].onclick = function(){
	Error_msg[4].style.display = "none";
}


function ReturnToDefault(){
	PremiumBtn.checked = false;
	SilverBtn.checked = false;
	Drop_down_list[0].selectedIndex = 0;
	Input[0].value = "";
	Input[1].value = "";
	document.getElementsByClassName("priceNum")[0].innerHTML = "0 $";
	Error_msg[0].style.display = "none";
	Error_msg[2].style.display = "none";
	Error_msg[3].style.display = "none";
	Error_msg[4].style.display = "none";
}












