$(document).ready(function () {
	
	$('.sketch-canvas-wrapper').append('<div class="eimg-div"></div>');
	
	$('.eimg-div').css({
		'width': '100%',
		'height': '100%',
		'float': 'left',
		'position': 'absolute',
		'top': '0px',
		'clear': 'none',
		'background-position': 'center',
		'background-repeat': 'no-repeat',
		'background-size': '100%',
		'opacity': '0.5',
		'z-index': '400',
		'pointer-events': 'none'
	});
		
	$('.toolbar')
		//.append('<br/>') // hidden overflow fix
		.append('<input class="eimg-input" type="text" placeholder="Enter image URL"/>')
		.append('<div class="btn eimg-load-button" title="Load Image" name="eimg-button">Load Image</div>')
		.append('<div class="btn eimg-clear-button" title="Clear" name="eimg-button">Hide Image</div>');
	
	$('.eimg-input').css({
		'outline': 'none',
		'height': '29px',
		'box-sizing': 'border-box',
		'width': '200px',
		'margin': '2px 4px',
		'padding': '2px 6px',
		'border': '1px solid #e14506',
		'border-width': '1px',
		'border-radius': '2px',
		'box-shadow': '1px 1px 0 #e14506,2px 2px 0 #e14506,3px 3px 0 #e14506'
	});
	
	$('.eimg-load-button').click(function() {
	
		var MyFuckingImage = new Image();
		MyFuckingImage.src = $('.eimg-input').val();
		
		setTimeout(function () {
			var MyFuckingImageSize = ($('.eimg-div').innerWidth()/$('.eimg-div').innerHeight() > (MyFuckingImage.width/MyFuckingImage.height)) ? "auto 100%" : "100%";
			$('.eimg-div').css({
				'background-image': 'url('+$('.eimg-input').val()+')',
				'background-size': MyFuckingImageSize
			});
		}, 700);
	});
	
	$('.eimg-clear-button').click(function() {
		$('.eimg-div').css({
			'background-image': 'none'
		});
	});
	
});