

$ani = $('.animated');
var animated = [];
for(var i in $ani){
    animated[i] = $ani[i];
}
var $window = $(window);

jQuery(document).ready(function($) {

    'use strict';
    //SMOOTH SCROLL
    smoothScroll.init({
        speed: 500, // How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        callbackBefore: function(toggle, anchor) {}, // Function to run before scrolling
        callbackAfter: function(toggle, anchor) {} // Function to run after scrolling
    });
    $window.on('scroll resize', check_if_in_view);
    
    $window.trigger('scroll');
    
});

function reset($elem) {
    $elem.before($elem.clone(true));
    var $newElem = $elem.prev();
    $elem.remove();
    return $newElem;
} 

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    for (var i in animated) {
	
	var $element = $(animated[i]);
	if(! ($element[0] && $element[0].offsetParent))
	    continue;
	
	var element_height = $element[0].offsetHeight;
	var element_top_position = $element[0].offsetTop + $element[0].offsetParent.offsetTop;
	var element_bottom_position = (element_top_position + element_height);
	//check to see if this current container is within viewport
	
	if ((element_bottom_position >= window_top_position) &&
	    (element_top_position <= window_bottom_position)) {
	    if( ! $element.hasClass( "animated" )){
		$element = reset($element);
		$element.addClass('animated');
		
		animated[i] = $element[0];
	    }
	} else {
	    if( $element.hasClass( "animated" )){
		$element.removeClass('animated');
	    }
	}
	
    }
    
}

$(window).load(function() {


    // //PARALLAX BACKGROUND
    // $(window).stellar({
    //     horizontalScrolling: false,
    // });

    window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
    };
    isMobileWebkit = mobileAndTabletcheck();
    
    if (isMobileWebkit) {
        $('html').addClass('mobile');
    }
    if (isMobileWebkit) {
        $('.bgimg').css('background-attachment','scroll');
        $('.bgimg-banner').css('background-attachment','scroll');
        console.log($('.bgimg-banner'));
    }
    /*
    var iScrollInstance;

    if (isMobileWebkit) {
        iScrollInstance = new iScroll('scroll-wrapper');

        $('#scroller').stellar({
            scrollProperty: 'transform',
            positionProperty: 'transform',
            horizontalScrolling: false,
            // verticalOffset: 150
        });
    } else {
        $.stellar({
            horizontalScrolling: false,
            // verticalOffset: 150
        });
    }
    */
    //PRELOADER
    $('#preload').delay(200).fadeOut('fast');


    //HEADER ANIMATION
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 1) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 500) {
         /*$("#banner").slideUp(100);*/
         //$("#medulla-vid")[0].play();
         //$("#whole-brain-vid")[0].play();
     }
     else {
         /*$("#banner").slideDown(100);*/
         //$("#medulla-vid")[0].pause();
         //$("#whole-brain-vid")[0].pause();
     }
});



//document.getElementById("medulla-vid").playbackRate = 3.0;

var shiftWindow = function() { scrollBy(0, -80) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
