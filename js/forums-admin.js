/**
 * Forums plugin admin javascript
 * 
 * @author	S H Mohanjith <moha@incsub.com>
 * @since	1.6.6
 */

(function ($) {
	$(document).ready(function () {
            if ($('#forum_color_one').length > 0) {
                $('#forum_color_one_panel').farbtastic('#forum_color_one').hide();
                $('#forum_color_two_panel').farbtastic('#forum_color_two').hide();
                $('#forum_color_header_panel').farbtastic('#forum_color_header').hide();
                $('#forum_color_border_panel').farbtastic('#forum_color_border').hide();
                
                $("input.forum_color").focus(function() {
                    if ($(this).val() == '') {
                        $(this).val('#ffffff');
                    }
                    $("#"+$(this).attr('id')+"_panel").slideDown();
                });
                
                $("input.forum_color").blur(function() {
                    $("#"+$(this).attr('id')+"_panel").slideUp();
                });
            }
	});
})(jQuery);
