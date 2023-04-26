var Video_description = document.getElementsByClassName("Video-description");
var Description_word = document.getElementsByClassName("description-word");
var VideoContent = document.getElementsByClassName("Video-content");

function showDescription(){
	if(Video_description[current_video].style.display === "none"){
		Video_description[current_video].style.display = "block";
		Description_word [0].innerHTML = "HIDE DESCRIPTION";
	}else{
		Video_description[current_video].style.display = "none";
		Description_word [0].innerHTML = "SHOW DESCRIPTION ";
	}
}


var Videos = ["Videos/Avril Lavigne-Iam with you.mp4","Videos/Avril lavigne-sk8ter boi.mp4","Videos/Avril Lavigne-Mobile.mp4","Videos/Avril-Lavigne(Losing Grip).mp4"];
var VideoTitles = ["Avril Lavigne - I'm With You (Official Music Video)","Avril Lavigne - Sk8er Boi (Official 					 Music Video)","Avril Lavigne - Mobile (Official Unreleased Music Video 2002)","Avril 					   Lavigne - Losing Grip (Official Music Video)"];

var PlayNowBtn = document.getElementsByClassName("Play-Now");
var Video = document.getElementsByClassName("video-viewer"); 
var Video_Title = document.getElementsByClassName("Video-Title");
var thumbnail_container = document.getElementsByClassName("thumbnail-container");
var play_image = document.getElementsByClassName("play-image");

var current_video;
var Currently_Playing = document.getElementsByClassName("Currently-Playing");

function changeStyle(index){
	PlayNowBtn[index].style.display = "none";
	Currently_Playing[index].style.display = "block";
	Currently_Playing[index].style.marginTop = "13px";
	play_image[0].style.display = "none";
	thumbnail_container[index].style.backgroundColor = "#121212";
	VideoContent[0].style.display = "block";
	VideoContent[1].style.display = "block";
	showDescription(index);
}

function ReturnToDefault(){
	for(var i =0; i < thumbnail_container.length; i++){
		Currently_Playing[i].style.display = "none";
		PlayNowBtn[i].style.display = "block";
		thumbnail_container[i].style.backgroundColor = "";
		Video_description[i].style.display ="none";
	}
}


function playAndPause(){
	if(!Video[0].paused){
		Video[0].pause();
		Currently_Playing[current_video].style.animation = null;
		Currently_Playing[current_video].innerHTML = "CURRENTLY PAUSED";
	}else{
		Video[0].play();
		Currently_Playing[current_video].style.animation = "flickerAnimation 2.4s infinite";
		Currently_Playing[current_video].innerHTML = "CURRENTLY PLAYING";	
	}
}


function playVideo(index){
	current_video = index;
	ReturnToDefault();
	Video[0].src = Videos[index];
	Video[0].style.visibility = "visible";
	Video_Title[0].innerHTML = VideoTitles[index];
	changeStyle(index);
	Video[0].play();
	Video[0].addEventListener("timeupdate",function(){
			if(Video[0].paused){
				Currently_Playing[current_video].style.animation = null;
				Currently_Playing[current_video].innerHTML = "CURRENTLY PAUSED";

			}else{
				Currently_Playing[current_video].style.animation = "flickerAnimation 2.7s infinite";
				Currently_Playing[current_video].innerHTML = "CURRENTLY PLAYING";	
			}
		})	
}

function pauseVideo(){
	if(!Video[0].paused){
		Video[0].pause();
	}else{
		Video[0].play();
	}
}
