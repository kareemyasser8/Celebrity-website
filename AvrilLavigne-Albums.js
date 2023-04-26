var songs =  [
	["Music/Losing Grip.mp3", "Music/Complicated.mp3", "Music/Sk8er Boi.mp3", "Music/Im With You.mp3"],["Music/Avril Lavigne - Nobody's Home (With Lyrics).m4a", "Music/Together.mp3", "Music/Don't Tell Me.mp3", "Music/He Wasn't.mp3"],
    ["Music/Girlfriend.mp3", "Music/I Can Do Better.mp3", "Music/Runaway.mp3", "Music/Avril Lavigne - Alone (Audio).mp3"],
    ["Music/What The Hell.mp3", "Music/Push.mp3", "Music/Wish You Were Here.mp3", "Music/Goodbye.mp3"]
];
var songsTitles = [
	["Losing Grip", "Complicated", "Sk8er Boi", "Im With You"],
	["No body's Home","Together","Don't Tell Me","He wasn't"],
	["Girlfriend","I Can Do Better","Runaway","Alone"],
	["What the hell","Push","Wish you were here","Goodbye"]
];
var songTitle = document.getElementsByClassName("song-title");
var song = new Audio();

var seekbarInner = document.getElementsByClassName("inner-seekbar");
var seekbarOuter = document.getElementsByClassName("outer-seekbar");

var VolumeseekbarInner = document.getElementsByClassName("volume-inner-seekbar");
var VolumeseekbarOuter = document.getElementsByClassName("volume-outer-seekbar");

var length;
var seekBarPercentage;
var volumePercentage;

var index_of_current_song;
var index_of_album;

var BluePlayButton = document.getElementsByClassName("play-btn");
var song_number = document.getElementsByClassName("song_number");
var small_play_icon = document.getElementsByClassName("song_number_play_hover");
var small_current_playing_icon = document.getElementsByClassName("song_current_playing_hover");
var SongList_title = document.getElementsByClassName("song_name_in_the_album");
var SongList_duration = document.getElementsByClassName("song_duration_in_the_album");
var play_button = document.getElementsByClassName("fa-play");
var pause_button = document.getElementsByClassName("fa_pause");
var song_seekbar_duration = document.getElementsByClassName("end-time");
var song_seekbar_current_duration = document.getElementsByClassName("start-time");

var PlayPauseButton = document.getElementsByClassName("play-button");

var full_volume_image = document.getElementsByClassName("full-volume");
var middle_volume_image = document.getElementsByClassName("middle-volume");
var low_volume_image = document.getElementsByClassName("low-volume");
var MutedVolume = document.getElementsByClassName("muted-volume");

var PlayNextButton = document.getElementsByClassName("play-forwards");
var PlayPreButton = document.getElementsByClassName("play-backwards");

var MediaPlayer = document.getElementsByClassName("Audio-player-container");


function showMediaPlayer(){
		MediaPlayer[0].style.display = "block";
		MediaPlayer[0].style.display = "flex";
}


function setIndex(album,index){
	index_of_current_song = index;
	index_of_album = album;
	PlaySong();
}

function getIndex_of_current_song(){
	return index_of_current_song;
}

function getIndex_of_current_album(){
	return index_of_album;
}

function PlayNext(){
	index_of_current_song++;
	if(index_of_current_song > 3){
		index_of_current_song = 0;
	}
	PlaySong();
}

function PlayPrevious(){
	index_of_current_song--;
	if(index_of_current_song < 0){
		index_of_current_song = 0;
	}
	PlaySong();
}



function MuteSound(){
	if(song.muted == false){
		song.muted = true;
		full_volume_image[0].style.display = "none";
		middle_volume_image[0].style.display = "none";
		low_volume_image[0].style.display = "none";
		MutedVolume[0].style.display = "block";
		MutedVolume[0].style.marginTop = "1px";
		
	}else{
		song.muted = false;
		MutedVolume[0].style.display = "none";	
		if(song.volume >= 0 && song.volume < 0.34){
					low_volume_image[0].style.display = "block";
					low_volume_image[0].style.marginTop = "1px";
					
					full_volume_image[0].style.display = "none";
					middle_volume_image[0].style.display = "none";
				}else if(song.volume >= 0.34 && song.volume < 0.67){
					low_volume_image[0].style.display = "none";
					full_volume_image[0].style.display = "none";
					middle_volume_image[0].style.display = "block";
					middle_volume_image[0].style.marginTop = "1px";
				}else{
					low_volume_image[0].style.display = "none";
					full_volume_image[0].style.display = "block";
					full_volume_image[0].style.marginTop = "1px";
					middle_volume_image[0].style.display = "none";
				}
	}
}


function ReturnIconsToDefault(){
	for(var i =0; i < 4; i++){
		song_number[i].style.display = null;
		small_play_icon[i].style.display = null;
		small_current_playing_icon[i].style.display = null;

		SongList_title[i].style.color = "white";
		SongList_duration[i].style.color = "white";
	}
}


function ChangeIcons(){
	index_of_current_song = getIndex_of_current_song();
	songTitle[0].innerHTML = songsTitles[index_of_album][index_of_current_song];
	song_number[index_of_current_song].style.display = "none";
	small_play_icon[index_of_current_song].style.display = "none";
	small_current_playing_icon[index_of_current_song].style.display = "block";
	SongList_title[index_of_current_song].style.color = "#28c1c0";
	SongList_duration[index_of_current_song].style.color = "#28c1c0";
	play_button[4].style.display = "none";
	pause_button[0].style.display = "block";
	BluePlayButton[0].innerHTML = 'PAUSE';
}


// Initializing values
var isPlaying = true;

// On video playing toggle values
song.onplaying = function() {
    isPlaying = true;
};

// On video pause toggle values
song.onpause = function() {
    isPlaying = false;
};

var Name_of_the_album = document.getElementsByClassName("Album-title");


function PauseAndPlay(){	
	if(index_of_current_song === undefined){	
		index_of_current_song = 0;
		if(Name_of_the_album[0].textContent == "Let go"){
			setIndex(0,0);
		}else if(Name_of_the_album[0].textContent == "Under My Skin"){
			setIndex(1,0);
		}else if(Name_of_the_album[0].textContent == "The best damn thing"){
			setIndex(2,0);
		}else if(Name_of_the_album[0].textContent == "Goodbye Lullaby"){
			setIndex(3,0);
		}
	}else{
		if(!song.paused && isPlaying){
			song.pause();
			pause_button[0].style.display = "none";
			play_button[4].style.display = "block";
			play_button[4].style.paddingTop = "2px";
			BluePlayButton[0].innerHTML = 'PLAY';
		}else{
			song.play();
			pause_button[0].style.display = "block";
			play_button[4].style.display = "none";
			BluePlayButton[0].innerHTML = 'PAUSE';
		}
	}
}


function MoveSeekbar(){
	seekbarOuter[0].addEventListener("click",function(e){
		var seekPosition = e.pageX - seekbarOuter[0].offsetLeft;
		if(seekPosition >= 0 && seekPosition < seekbarOuter[0].offsetWidth){
			song.currentTime  = (seekPosition * song.duration)/seekbarOuter[0].offsetWidth;
		}
	})
}


function MoveVolumeSeekbar(){
	VolumeseekbarOuter[0].addEventListener("click",function(e){
		var seekPosition = e.pageX - VolumeseekbarOuter[0].offsetLeft;
		if(seekPosition >= 0 && seekPosition < VolumeseekbarOuter[0].offsetWidth){
			var Percentage = (seekPosition/VolumeseekbarOuter[0].offsetWidth)*100;
			VolumeseekbarInner[0].style.width = Percentage + "%";
			if(seekPosition >= 0 && seekPosition <= 100){
				song.volume = (Percentage/100);
				
				MutedVolume[0].style.display = "none";
				song.muted = false;
				
				if(song.volume >= 0 && song.volume < 0.34){
					low_volume_image[0].style.display = "block";
					low_volume_image[0].style.marginTop = "1px";
					
					full_volume_image[0].style.display = "none";
					middle_volume_image[0].style.display = "none";
				}else if(song.volume >= 0.34 && song.volume < 0.67){
					low_volume_image[0].style.display = "none";
					full_volume_image[0].style.display = "none";
					middle_volume_image[0].style.display = "block";
					middle_volume_image[0].style.marginTop = "1px";
				}else{
					low_volume_image[0].style.display = "none";
					full_volume_image[0].style.display = "block";
					full_volume_image[0].style.marginTop = "1px";
					middle_volume_image[0].style.display = "none";
				}
				
			}
		}
	})
}


function PlaySong(){
	index_of_current_song = getIndex_of_current_song();
	index_of_album = getIndex_of_current_album();
	song.src = songs[index_of_album][index_of_current_song];
	song.pause();
	ReturnIconsToDefault();
	song.onloadedmetadata = function(){
		length = song.duration;
		var IntegerLength = Math.floor(length);
		var minutes = "0" + Math.floor(IntegerLength/60);
		var seconds = Math.ceil(((IntegerLength/60)-minutes)*60);
		if(seconds > 10){
			song_seekbar_duration[0].innerHTML = minutes + ":" + seconds;
		}else{
			song_seekbar_duration[0].innerHTML = minutes + ":0" + seconds;
		};	
		
		song.addEventListener("timeupdate",function updateSeekbar(){
				var total = song.duration;
				var lengthX = song.currentTime;
				var IntegerlengthX = Math.floor(lengthX);

				var minutesX = "0" + Math.floor(IntegerlengthX/60);

				var secondsX = Math.round(((IntegerlengthX/60)-minutesX)*60);
				if(secondsX >= 10){
					song_seekbar_current_duration[0].innerHTML = minutesX + ":" + secondsX;
				}else{
					song_seekbar_current_duration[0].innerHTML = minutesX + ":0" + secondsX;
				}

				var CurrentPercentage = (lengthX/total)*100;

				var seekbarInner = document.getElementsByClassName("inner-seekbar");
				seekbarInner[0].style.width = CurrentPercentage + "%";
				
				if(CurrentPercentage == 100){
					PlayNext();
				}	
			
			});			
		};
	
	song.play();
	showMediaPlayer();
	ChangeIcons();
};


//for key events

document.addEventListener("keydown", function(event) {
// press P button  	
	if(event.which == 80){
		PauseAndPlay();
	}
// press M button	
	if(event.which == 77){
		MuteSound();
	}
	
//	press the right button ->
	if(event.which == 39){
		song.currentTime += 5;
	}
//	press the left button ->
	if(event.which == 37){
		song.currentTime -= 5;
	}

//	console.log(event.which);
})


$(document).ready(function(){
	console.log("hi");
	if($(window).width() > 770){
		$(".shortcuts-cloud").animate({right: '60px', opacity: '0.7'},400);
		$(".close-icon").click(function(){
			$(".shortcuts-cloud").fadeOut();
		})
	}
})





	
	