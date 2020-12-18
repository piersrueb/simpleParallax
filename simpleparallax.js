//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

const simpleParallax = (elem, modifier) => {
    let paras = document.getElementsByClassName(elem);
    const sp = () => {
        for (let i = 0; i < paras.length; i++) {
            paras[i].setAttribute('style', 'background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;');
            let x = paras[i].getBoundingClientRect().top / modifier;
            let y = Math.round(x * 100) / 100;
            paras[i].style.backgroundPosition = 'center ' + y + 'px';
        }
        requestAnimationFrame(sp);
    }
    requestAnimationFrame(sp);
}
