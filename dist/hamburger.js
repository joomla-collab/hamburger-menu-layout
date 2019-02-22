jQuery(document).ready(function(){
	var widthOne = 20;
	var widthTwo = 20;
	var widthThree = 20;
	var space = 3;
	var height = 2;
	var round = 0;
	var bRound = 0;
	var boxHgt = 40;
	var boxWid = 40;
	var currHeight = 12;
	var currWidth = 20;
	jQuery("#align-left").css('background', '#aaaaaa');

	jQuery('#width-minus-one').click(function() {
		if(widthOne > 1) {
		    widthOne--;
		    jQuery(".hamburger-bar.one").css('width', widthOne+'px');
		    jQuery("#width-one").html(widthOne);
		    jQuery('#one-w').text(widthOne);
		    getWid();
		}
	});
	jQuery('#width-plus-one').click(function() {
	    widthOne++;
	    jQuery(".hamburger-bar.one").css('width', widthOne+'px');
	    jQuery("#width-one").html(widthOne);
		jQuery('#one-w').text(widthOne);
		getWid();
	});

	jQuery('#width-minus-two').click(function() {
		if(widthTwo > 1) {
		    widthTwo--;
		    jQuery(".hamburger-bar.two").css('width', widthTwo+'px');
		    jQuery("#width-two").html(widthTwo);
		    jQuery('#two-w').text(widthTwo);
		    getWid();
		}
	});
	jQuery('#width-plus-two').click(function() {
	    widthTwo++;
	    jQuery(".hamburger-bar.two").css('width', widthTwo+'px');
	    jQuery("#width-two").html(widthTwo);
	    jQuery('#two-w').text(widthTwo);
	    getWid();
	});

	jQuery('#width-minus-three').click(function() {
		if(widthThree > 1) {
		    widthThree--;
		    jQuery(".hamburger-bar.three").css('width', widthThree+'px');
		    jQuery("#width-three").html(widthThree);
		    jQuery('#three-w').text(widthThree);
		    getWid();
		}
	});
	jQuery('#width-plus-three').click(function() {
	    widthThree++;
	    jQuery(".hamburger-bar.three").css('width', widthThree+'px');
	    jQuery("#width-three").html(widthThree);
	    jQuery('#three-w').text(widthThree);
	    getWid();
	});

	jQuery('#height-minus').click(function() {
		if(height > 0) {
		    height--;
		    jQuery(".hamburger-bar.one").css('height', height+'px');
		    jQuery(".hamburger-bar.two").css('height', height+'px');
		    jQuery(".hamburger-bar.three").css('height', height+'px');
		    jQuery("#height").html(height);
		    jQuery('#ht').text(height);
		    getHgt();
	    }
	});
	jQuery('#height-plus').click(function() {
	    height++;
	    jQuery(".hamburger-bar.one").css('height', height+'px');
	    jQuery(".hamburger-bar.two").css('height', height+'px');
	    jQuery(".hamburger-bar.three").css('height', height+'px');
	    jQuery("#height").html(height);
	    jQuery('#ht').text(height);
	    getHgt();
	});

	jQuery('#space-minus').click(function() {
		if(space > 0) {
		    space--;
		    jQuery(".hamburger-bar.one").css('margin-bottom', space+'px');
		    jQuery(".hamburger-bar.two").css('margin-bottom', space+'px');
		    jQuery(".hamburger-bar.three").css('margin-bottom', space+'px');
		    jQuery("#space").html(space);
		    jQuery('#mbot').text(space);
		    getHgt();
		}
	});
	jQuery('#space-plus').click(function() {
		space++;
		jQuery(".hamburger-bar.one").css('margin-bottom', space+'px');
		jQuery(".hamburger-bar.two").css('margin-bottom', space+'px');
		jQuery(".hamburger-bar.three").css('margin-bottom', space+'px');
		jQuery("#space").html(space);
		jQuery('#mbot').text(space);
		getHgt();
	});

	jQuery('#round-minus').click(function() {
		if(round > 0) {
		    round--;
		    jQuery(".hamburger-bar.one").css('border-radius', round+'px');
		    jQuery(".hamburger-bar.two").css('border-radius', round+'px');
		    jQuery(".hamburger-bar.three").css('border-radius', round+'px');
		    jQuery("#round").html(round);
		    jQuery('#rad').text(round);
		}
	});
	jQuery('#round-plus').click(function() {
	    round++;
	    jQuery(".hamburger-bar.one").css('border-radius', round+'px');
	    jQuery(".hamburger-bar.two").css('border-radius', round+'px');
	    jQuery(".hamburger-bar.three").css('border-radius', round+'px');
	    jQuery("#round").html(round);
	    jQuery('#rad').text(round);
	});

	jQuery('#b-round-minus').click(function() {
		if(bRound > 0) {
		    bRound--;
		    jQuery("#hamb").css('border-radius', bRound+'px');
		    jQuery("#b-round").html(bRound);
		    jQuery('#box-rad').text(bRound);
		}
	});
	jQuery('#b-round-plus').click(function() {
	    bRound++;
	    jQuery("#hamb").css('border-radius', bRound+'px');
	    jQuery("#b-round").html(bRound);
	    jQuery('#box-rad').text(bRound);
	});

	jQuery('#b-height-minus').click(function() {
		if(boxHgt > currHeight) {
		    boxHgt--;
			currHgt = height * 3;
			currSpc = space * 2;
			currHeight = currHgt + currSpc;
			currHeightPad = boxHgt - currHeight;
			currHeightHalf = currHeightPad / 2;
		    jQuery("#hamburger").css('height', boxHgt+'px');
		    jQuery("#b-height").html(boxHgt);
		    jQuery('#box-he').text(boxHgt);
		    jQuery('#hamb').css('padding-top', currHeightHalf+'px');
		    jQuery('#hamb').css('padding-bottom', currHeightHalf+'px');
		    jQuery('#box-pad-h').text(currHeightHalf);
		}
	});
	jQuery('#b-height-plus').click(function() {
		boxHgt++;
		currHgt = height * 3;
		currSpc = space * 2;
		currHeight = currHgt + currSpc;
		currheightPad = boxHgt - currHeight;
		currHeightHalf = currheightPad / 2;
		jQuery("#hamburger").css('height', boxHgt+'px');
		jQuery("#b-height").html(boxHgt);
		jQuery('#box-he').text(boxHgt);
		jQuery('#hamb').css('padding-top', currHeightHalf+'px');
		jQuery('#hamb').css('padding-bottom', currHeightHalf+'px');
		jQuery('#box-pad-h').text(currHeightHalf);
	});

	jQuery('#b-width-minus').click(function() {
		if(boxWid > currWidth) {
		    boxWid--;
			currWidth = jQuery('#hamb').width();
			currWidthPad = boxWid - currWidth;
			currWidthHalf = currWidthPad / 2;
		    jQuery("#hamburger").css('width', boxWid+'px');
		    jQuery("#b-width").html(boxWid);
		    jQuery('#box-wi').text(boxWid);
		    jQuery('#hamb').css('padding-left', currWidthHalf+'px');
		    jQuery('#hamb').css('padding-right', currWidthHalf+'px');
		    jQuery('#box-pad-w').text(currWidthHalf);
		}
	});
	jQuery('#b-width-plus').click(function() {
	    boxWid++;
		currWidth = jQuery('#hamb').width();
		currWidthPad = boxWid - currWidth;
		currWidthHalf = currWidthPad / 2;
		jQuery("#hamburger").css('width', boxWid+'px');
		jQuery("#b-width").html(boxWid);
		jQuery('#box-wi').text(boxWid);
		jQuery('#hamb').css('padding-left', currWidthHalf+'px');
		jQuery('#hamb').css('padding-right', currWidthHalf+'px');
		jQuery('#box-pad-w').text(currWidthHalf);
	});

	jQuery('#align-left').click(function() {
	    jQuery(".hamburger-bar.one").css('margin-left', '0');
	    jQuery(".hamburger-bar.two").css('margin-left', '0');
	    jQuery(".hamburger-bar.three").css('margin-left', '0');
	    jQuery(".hamburger-bar.one").css('margin-right', 'initial');
	    jQuery(".hamburger-bar.two").css('margin-right', 'initial');
	    jQuery(".hamburger-bar.three").css('margin-right', 'initial');
	    jQuery("#align-left").css('background', '#aaaaaa');
	    jQuery("#align-center").css('background', '#dddddd');
	    jQuery("#align-right").css('background', '#dddddd');
	    jQuery(".hamburger-bar.one").css('float', 'left');
	    jQuery(".hamburger-bar.two").css('float', 'left');
	    jQuery(".hamburger-bar.three").css('float', 'left');
	    jQuery('#mleft').text('0');
	    jQuery('#mright').text('initial');
	});
	jQuery('#align-center').click(function() {
	    jQuery(".hamburger-bar.one").css('margin-left', 'auto');
	    jQuery(".hamburger-bar.two").css('margin-left', 'auto');
	    jQuery(".hamburger-bar.three").css('margin-left', 'auto');
	    jQuery(".hamburger-bar.one").css('margin-right', 'auto');
	    jQuery(".hamburger-bar.two").css('margin-right', 'auto');
	    jQuery(".hamburger-bar.three").css('margin-right', 'auto');
	    jQuery(".hamburger-bar.one").css('float', 'none');
	    jQuery(".hamburger-bar.two").css('float', 'none');
	    jQuery(".hamburger-bar.three").css('float', 'none');
	    jQuery("#align-left").css('background', '#dddddd');
	    jQuery("#align-center").css('background', '#aaaaaa');
	    jQuery("#align-right").css('background', '#dddddd');
	    jQuery('#mleft').text('auto');
	    jQuery('#mright').text('auto');
	});
	jQuery('#align-right').click(function() {
	    jQuery(".hamburger-bar.one").css('margin-left', 'initial');
	    jQuery(".hamburger-bar.two").css('margin-left', 'initial');
	    jQuery(".hamburger-bar.three").css('margin-left', 'initial');
	    jQuery(".hamburger-bar.one").css('margin-right', '0');
	    jQuery(".hamburger-bar.two").css('margin-right', '0');
	    jQuery(".hamburger-bar.three").css('margin-right', '0');
	    jQuery(".hamburger-bar.one").css('float', 'right');
	    jQuery(".hamburger-bar.two").css('float', 'right');
	    jQuery(".hamburger-bar.three").css('float', 'right');
	    jQuery("#align-left").css('background', '#dddddd');
	    jQuery("#align-center").css('background', '#dddddd');
	    jQuery("#align-right").css('background', '#aaaaaa');
	    jQuery('#mleft').text('initial');
	    jQuery('#mright').text('0');
	});

	jQuery(document).on('change', '#color1', function() {
		var color1 = jQuery("#color1").val();
		jQuery("#color1").css('background', '#'+color1);
		jQuery('#one-c').text(color1);
	});

	jQuery(document).on('change', '#color2', function() {
		var color2 = jQuery("#color2").val();
		jQuery("#color2").css('background', '#'+color2);
		jQuery('#two-c').text(color2);
	});

	jQuery(document).on('change', '#color3', function() {
		var color3 = jQuery("#color3").val();
		jQuery("#color3").css('background', '#'+color3);
		jQuery('#three-c').text(color3);
	});

	jQuery(document).on('change', '#color4', function() {
		var color4 = jQuery("#color4").val();
		jQuery("#color4").css('background', '#'+color4);
		jQuery('#box-bg').text(color4);
	});

	function getWid() {
		currWidth = Math.max(widthOne, widthTwo, widthThree);
		currWidthPad = boxWid - currWidth;
		currWidthHalf = currWidthPad / 2;
		jQuery("#hamburger").css('width', boxWid+'px');
		jQuery("#b-width").html(boxWid);
		jQuery('#box-wi').text(boxWid);
		jQuery('#hamb').css('padding-left', currWidthHalf+'px');
		jQuery('#hamb').css('padding-right', currWidthHalf+'px');
		jQuery('#box-pad-w').text(currWidthHalf);
	};

	function getHgt() {
		currHgt = height * 3;
		currSpc = space * 2;
		currHeight = currHgt + currSpc;
		currHeightPad = boxHgt - currHeight;
		currHeightHalf = currHeightPad / 2;
		jQuery("#hamburger").css('height', boxHgt+'px');
		jQuery("#b-height").html(boxHgt);
		jQuery('#box-he').text(boxHgt);
		jQuery('#hamb').css('padding-top', currHeightHalf+'px');
		jQuery('#hamb').css('padding-bottom', currHeightHalf+'px');
		jQuery('#box-pad-h').text(currHeightHalf);
	}
});

function getPng() {
	domtoimage.toBlob(document.getElementById('hamb')).then(function (blob) {
       		window.saveAs(blob, 'hamburger.png');
	});
}
