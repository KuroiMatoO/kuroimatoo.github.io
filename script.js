var options = {
    slideSelector: ".slider", 
};
jQuery(function() {
    jQuery.scrollify({
        section : options.slideSelector,
        before:function(slideIndex, slides) {           
        
            var c = jQuery('.slider:eq('+(slideIndex -1)+')');
            var n = jQuery('.slider:eq('+slideIndex+')');
            
            
            
        }
    });
});