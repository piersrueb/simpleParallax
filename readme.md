## Simple Parallax

Simple fixed background parallax effect in vanilla js.

####  JS

Initialise the plugin.
```js
simpleParallax(1,8);
```
#### HTML
```html
<section id="parallax-1"></section>
```
#### CSS
```css
#parallax-1{
    background-image: url('../img/myimage.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    height: 400px;
}
```
