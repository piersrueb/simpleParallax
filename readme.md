## Simple Parallax

Simple fixed background parallax effect in vanilla js.

See [demo](https://codepen.io/Rueb/pen/rZbZgj) on Codepen.

####  JS

Initialise the plugin. The first argument identifies the parrallax id. The second controls the parallax distance.

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
    background-size: cover;
    height: 400px;
    width: 100%;
}
```
