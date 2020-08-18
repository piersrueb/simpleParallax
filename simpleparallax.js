//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

const simpleParallax = (id, modifier) => {
  	let paraId = document.querySelector(id);
    paraId.setAttribute('style', 'background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;');
    const sp = () => {
        let x = paraId.getBoundingClientRect().top / modifier;
		let y = Math.round(x * 100) / 100;
        paraId.style.backgroundPosition = 'center ' + y + 'px';
        requestAnimationFrame(sp);
    }
    requestAnimationFrame(sp);
}
