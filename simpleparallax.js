//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

const simpleParallax = (id, modifier) => {
  	let paraId = document.querySelector(id);
    const sp = () => {
        let x = paraId.getBoundingClientRect().top / modifier;
		let y = Math.round(x * 100) / 100;
		paraId.style.backgroundPosition = 'center ' + y + 'px';
    }
    sp();
	window.addEventListener('scroll', function(e) { sp(); });
}
