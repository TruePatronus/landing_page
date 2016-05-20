$(function() {
	var browserWidth = document.documentElement.clientWidth;
	var $header = $('header');
	var $slideWrapper = $('.slide-wrapper');
	var $services = $('.service-container li');
	var $serviceArr = [].slice.call($services);
	console.log("asdasd");
	if (browserWidth<1000) {
		$serviceArr.forEach(function(item,i,arr) {
			$(item).find('.fa').removeClass('fa-3x').addClass('fa-2x');
		});
	} 
// This is changes for Header when sticky. I disabled this for more comfort work with PixelPerfect.	
	// $(window).scroll(function() {
	//     if ($(this).scrollTop() > 4){ 
	//         $header.addClass("sticky"); 
	//         $slideWrapper.addClass("sticky"); 
	//     }
	//     else{
	//         $header.removeClass("sticky");
	//         $slideWrapper.removeClass("sticky");
	//     }
	// });
});