//  Simple Parallax
//  Author Piers Rueb
//  https://github.com/piersrueb/simpleparallax

const simpleParallax = (elem, modifier) => {
    let paras = document.getElementsByClassName(elem);
    for (let i = 0; i < paras.length; i++) {
        let para = paras[i];
        para.setAttribute('style', 'background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;');
        const sp = () => {
            let x = para.getBoundingClientRect().top / modifier;
            let y = Math.round(x * 100) / 100;
            para.style.backgroundPosition = 'center ' + y + 'px';
            requestAnimationFrame(sp);
        }
        requestAnimationFrame(sp);
    }
}
