jQuery(document).ready(function(){
	var widthOne = 20;
	var widthTwo = 20;
	var widthThree = 20;
	var space = 3;
	var height = 2;
	var round = 0;
	jQuery("#align-left").css('background', '#aaaaaa');

	jQuery('#width-minus-one').click(function() {
	    widthOne--;
	    jQuery(".hamburguer-bar.one").css('width', widthOne+'px');
	    jQuery("#width-one").html(widthOne);
	});
	jQuery('#width-plus-one').click(function() {
	    widthOne++;
	    jQuery(".hamburguer-bar.one").css('width', widthOne+'px');
	    jQuery("#width-one").html(widthOne);
	});

	jQuery('#width-minus-two').click(function() {
	    widthTwo--;
	    jQuery(".hamburguer-bar.two").css('width', widthTwo+'px');
	    jQuery("#width-two").html(widthTwo);
	});
	jQuery('#width-plus-two').click(function() {
	    widthTwo++;
	    jQuery(".hamburguer-bar.two").css('width', widthTwo+'px');
	    jQuery("#width-two").html(widthTwo);
	});

	jQuery('#width-minus-three').click(function() {
	    widthThree--;
	    jQuery(".hamburguer-bar.three").css('width', widthThree+'px');
	    jQuery("#width-three").html(widthThree);
	});
	jQuery('#width-plus-three').click(function() {
	    widthThree++;
	    jQuery(".hamburguer-bar.three").css('width', widthThree+'px');
	    jQuery("#width-three").html(widthThree);
	});



	jQuery('#height-minus').click(function() {
	    height--;
	    jQuery(".hamburguer-bar.one").css('height', height+'px');
	    jQuery(".hamburguer-bar.two").css('height', height+'px');
	    jQuery(".hamburguer-bar.three").css('height', height+'px');
	    jQuery("#height").html(height);
	});
	jQuery('#height-plus').click(function() {
	    height++;
	    jQuery(".hamburguer-bar.one").css('height', height+'px');
	    jQuery(".hamburguer-bar.two").css('height', height+'px');
	    jQuery(".hamburguer-bar.three").css('height', height+'px');
	    jQuery("#height").html(height);
	});

	jQuery('#space-minus').click(function() {
	    space--;
	    jQuery(".hamburguer-bar.one").css('margin-bottom', space+'px');
	    jQuery(".hamburguer-bar.two").css('margin-bottom', space+'px');
	    jQuery(".hamburguer-bar.three").css('margin-bottom', space+'px');
	    jQuery("#space").html(space);
	});
	jQuery('#space-plus').click(function() {
	    space++;
	    jQuery(".hamburguer-bar.one").css('margin-bottom', space+'px');
	    jQuery(".hamburguer-bar.two").css('margin-bottom', space+'px');
	    jQuery(".hamburguer-bar.three").css('margin-bottom', space+'px');
	    jQuery("#space").html(space);
	});

	jQuery('#round-minus').click(function() {
	    round--;
	    jQuery(".hamburguer-bar.one").css('border-radius', round+'px');
	    jQuery(".hamburguer-bar.two").css('border-radius', round+'px');
	    jQuery(".hamburguer-bar.three").css('border-radius', round+'px');
	    jQuery("#round").html(round);
	});
	jQuery('#round-plus').click(function() {
	    round++;
	    jQuery(".hamburguer-bar.one").css('border-radius', round+'px');
	    jQuery(".hamburguer-bar.two").css('border-radius', round+'px');
	    jQuery(".hamburguer-bar.three").css('border-radius', round+'px');
	    jQuery("#round").html(round);
	});

	jQuery('#align-left').click(function() {
	    jQuery(".hamburguer-bar.one").css('margin-left', '0');
	    jQuery(".hamburguer-bar.two").css('margin-left', '0');
	    jQuery(".hamburguer-bar.three").css('margin-left', '0');
	    jQuery(".hamburguer-bar.one").css('margin-right', 'unset');
	    jQuery(".hamburguer-bar.two").css('margin-right', 'unset');
	    jQuery(".hamburguer-bar.three").css('margin-right', 'unset');
	    jQuery("#align-left").css('background', '#aaaaaa');
	    jQuery("#align-center").css('background', '#dddddd');
	    jQuery("#align-right").css('background', '#dddddd');
	    jQuery(".hamburguer-bar.one").css('float', 'left');
	    jQuery(".hamburguer-bar.two").css('float', 'left');
	    jQuery(".hamburguer-bar.three").css('float', 'left');
	});
	jQuery('#align-center').click(function() {
	    jQuery(".hamburguer-bar.one").css('margin-left', 'auto');
	    jQuery(".hamburguer-bar.two").css('margin-left', 'auto');
	    jQuery(".hamburguer-bar.three").css('margin-left', 'auto');
	    jQuery(".hamburguer-bar.one").css('margin-right', 'auto');
	    jQuery(".hamburguer-bar.two").css('margin-right', 'auto');
	    jQuery(".hamburguer-bar.three").css('margin-right', 'auto');
	    jQuery(".hamburguer-bar.one").css('float', 'none');
	    jQuery(".hamburguer-bar.two").css('float', 'none');
	    jQuery(".hamburguer-bar.three").css('float', 'none');
	    jQuery("#align-left").css('background', '#dddddd');
	    jQuery("#align-center").css('background', '#aaaaaa');
	    jQuery("#align-right").css('background', '#dddddd');
	});
	jQuery('#align-right').click(function() {
	    jQuery(".hamburguer-bar.one").css('margin-left', 'unset');
	    jQuery(".hamburguer-bar.two").css('margin-left', 'unset');
	    jQuery(".hamburguer-bar.three").css('margin-left', 'unset');
	    jQuery(".hamburguer-bar.one").css('margin-right', '0');
	    jQuery(".hamburguer-bar.two").css('margin-right', '0');
	    jQuery(".hamburguer-bar.three").css('margin-right', '0');
	    jQuery(".hamburguer-bar.one").css('float', 'right');
	    jQuery(".hamburguer-bar.two").css('float', 'right');
	    jQuery(".hamburguer-bar.three").css('float', 'right');
	    jQuery("#align-left").css('background', '#dddddd');
	    jQuery("#align-center").css('background', '#dddddd');
	    jQuery("#align-right").css('background', '#aaaaaa');
	});
});