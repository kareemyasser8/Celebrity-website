$(document).ready(function ScrollBehaviour(){
			 // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		
		if($(window).width() >= 770){
  			 $('html, body').animate({
        		scrollTop: $(hash).offset().top -250
      		}, 800);
		}
		
		else if($(window).width() <= 770){
			$('html, body').animate({
        		scrollTop: $(hash).offset().top - 70
      		}, 800);
		}
		
    } // End if
  });
});



