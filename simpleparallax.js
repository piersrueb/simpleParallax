//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

function simpleParallax(id,modifier){
	var paraId = document.getElementById('parallax-' + id);
	window.addEventListener('scroll', function(e) {
		var x = paraId.getBoundingClientRect().top / modifier,
			y = Math.round(x * 100) / 100;
		paraId.style.backgroundPosition = 'center ' + y + 'px';
	});
}
