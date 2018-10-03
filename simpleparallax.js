//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

const simpleParallax = (id,modifier) =>{
  	let paraId = document.querySelector(id);
	window.addEventListener('scroll', function(e) {
		let x = paraId.getBoundingClientRect().top / modifier;
		let y = Math.round(x * 100) / 100;
		paraId.style.backgroundPosition = 'center ' + y + 'px';
	});
}
