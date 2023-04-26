var modal = document.getElementsByClassName("Modal-holder");
var modal_display_image = document.getElementsByClassName("modal-display-image");
var image_album = document.getElementsByClassName("image-album");
var figure = document.getElementsByTagName("figure");
var close = document.getElementsByClassName("close-image-modal");

for(var i =0; i < image_album.length; i++){
	image_album[i].onclick = function(){
		console.log("hi");
		modal[0].style.display = "block";
		modal_display_image[0].src = this.src;
	}
}

close[0].onclick = function(){
	modal[0].style.display = "none";
}