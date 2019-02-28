/*
 *  Project     : Covering Bad
 *  Description : A simple jQuery Plugin for cover an item by another item with dragging ability.
 *  Author      : Mojtaba Seyedi
 *  License     : MIT  http://seyedi.mit-license.org
*/
(function($) {
$.fn.coveringBad = function(options) {

	var settings = $.extend({

		marginY : 30 ,
		marginX : 30 ,
		setX  : 30,
		setY  : 30,
		direction   : "horizontal"

	} , options);

	return this.each(function() {

	// Initialization
	////////////////////////////////

		var $this = $(this),
				$changeable = $this.find('>.changeable'),
				$handle = $this.find('>.handle'),
				width  = $this.innerWidth(),
				height = $this.innerHeight(),
				pos_x  = null,
				pos_y  = null,
				startX = null,
				startY = null,
				min_left = settings.marginX,
				max_left = width - settings.marginX,

				min_top  = settings.marginY,
				max_top  = height - settings.marginY,
				setX = settings.setX,
				setY = settings.setY;


		$changeable.height($this.height());

		if(setX < min_left) {
			setX = min_left;
		}

		if(setY < min_top) {
			setY = min_top;
		}

		$handle.append('<span class="left icon-chevron-left"></span><span class="right icon-chevron-right"/></span>');
		$handle.css('left', setX);
		$handle.css('top', setY);


		// Direction
		//////////////////////////////////

		if(settings.direction === "horizontal" ) {
			$changeable.width(setX);
			$changeable.css('border-right', '3px dashed #f3f3f1');
		}

		else if(settings.direction === "vertical" ) {

					$this.height($changeable.height());
					$changeable.height(setY);
					$changeable.css('border-bottom', '3px dashed #f3f3f1');
					$handle.addClass('vertical');
		}

		// Dragging Bad
		//////////////////////////////////
        var handleClick=0;
//		$handle.on('mousedown', function(event) {
//            event.preventDefault();
//            event.stopPropagation();
//            $('.tipsImg').hide();
//            clickMove=0;
//            handleClick=1;
//            coverDefault=1;
//
//			$handle.addClass('draggable');
//			pos_x  = parseInt($handle.css('left'));
//			startX = event.pageX;
//			pos_y  = parseInt($handle.css('top'));
//			startY = event.pageY;
//            $(document).unbind("mousemove");
//            $(document).unbind("mouseup");
//            $this.unbind('mouseup');
//            $this.unbind('mousemove');
//
//            $this.bind('mousemove', dragger);
//            $(document).on('mouseup' , function(event) {
//                $this.unbind('mousemove');
//                $this.unbind('mouseup');
//                        handleClick=0;
//            			 $handle.removeClass('draggable');
//            		});
//		});
        $('.covered').mouseenter(function(){
            event.preventDefault();
            event.stopPropagation();
            $('.tipsImg').hide();
            $('.changeable').unbind('mouseover');
            clickMove=0;
            handleClick=1;
            coverDefault=1;
            $handle.addClass('draggable');
            $(document).unbind("mousemove");
//            $(document).unbind("mouseup");
            $('.covered').bind('mousemove', dragger2);
            return false;
        });
        $('.covered').on('mouseleave' , function(event) {
            event.preventDefault();
            event.stopPropagation();
            $this.unbind('mousemove');
//            $this.unbind('mouseup');
                    handleClick=0;
            $handle.removeClass('draggable');
            return false;
        });
//		$(document).on('mouseup' , function(event) {
//            handleClick=0;
//			 $handle.removeClass('draggable');
//		});
//
//		$this.bind('mousemove', dragger);

        if(view_full_up==1){
                        $('.changeable').unbind('mouseover');
                        clickMove=0;
                        handleClick=1;
                        coverDefault=1;
                        $handle.addClass('draggable');
                        $(document).unbind("mousemove");
                        $('.covered').bind('mousemove', dragger2);
        }

		function dragger(e) {
            e.preventDefault();
            e.stopPropagation();
//            clickMove=0;
            if(handleClick) clickMove=0;
            if(coverDefault==1){
			var left = pos_x + (e.pageX - startX);

			if (left < min_left) left = min_left;
			else if (left > max_left) left = max_left;
			$('.draggable').css('left', left);
			var top = pos_y + (e.pageY - startY);
			if (top < min_top) top = min_top;
			else if (top > max_top) top = max_top;

			$('.draggable').css('top', top);

			if($('.draggable').length) {
				changeWidth(left , top);
			}
            }
//            return false;

		}
        var isMove=0;

        function dragger2(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $('.changeable').unbind('mouseover');
                    if(!isMove){
                        isMove=1;
                    if(handleClick) clickMove=0;
                    if(coverDefault==1){
        			var left = e.pageX-$('.covered').offset().left-parseInt($('.covered').css('borderWidth').replace(/[px%]/g, ""));
        			if (left < min_left) left = min_left;
        			else if (left > max_left) left = max_left;
                    var top = e.pageY-$('.covered').offset().top-parseInt($('.covered').css('borderWidth').replace(/[px%]/g, ""));
        			if (top < min_top) top = min_top;
        			else if (top > max_top) top = max_top;
        			$('.handle').css({'left':left+19});

        			if($('.draggable').length) {
        				changeWidth(left , top);
        			}
                    }
                        isMove=0;
                     }
            return false;
        		}

		// Changing width or height
		//////////////////////////////////////

		function changeWidth(w , h) {

			if(settings.direction === "horizontal" ) {
				$changeable.width(w);
			}

			else if(settings.direction === "vertical" ) {
				$changeable.height(h);
			}

		}

	});

}

})(jQuery);