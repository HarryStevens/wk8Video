/**
 * @author Harry Stevens
 */

function setNav() {

	$(".button").on("click",function() {
		
		//Something happens when .button elements are clicked
				
		var buttonName = $(this).attr("ref");
		
		if ($(this).hasClass("active")) {
			//do nothing
		} else {
			$("img.active").removeClass("active").fadeOut();
			$("img."+buttonName).addClass("active").fadeIn();
			
			$(".button.active").removeClass("active");
			$(this).addClass("active");
		}
		
	$("img.active").show();

		
	});
	
	 
}



$(document).ready(function(){

	setNav();
});
