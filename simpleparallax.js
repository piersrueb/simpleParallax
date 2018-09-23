//  parallax

function simpleParallax(id,modifier){
	var paraId = document.getElementById('parallax-' + id);
	window.onscroll = function(){
		var x = paraId.getBoundingClientRect().top / modifier,
			y = Math.round(x * 100) / 100;
		paraId.style.backgroundPosition = 'center ' + y + 'px';
	};
}

simpleParallax(1,8);
