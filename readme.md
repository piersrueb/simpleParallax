## Simple Parallax

Simple fixed background parallax effect in vanilla js.

See [demo](https://codepen.io/Rueb/pen/rZbZgj) on Codepen.

####  JS

Initialise the plugin. The first argument identifies the parrallax class.

The second is the modifier it controls the parallax distance. It is defined as a fraction of the total page height and is used to animate the background image position on scroll.

```js
simpleParallax('para',8);
```

#### HTML

```html
<section class="para" id="parallax-1"></section>
```

#### CSS

```css
#parallax-1{
    background-image: url('../img/myimage.jpg');
    height: 400px;
    width: 100%;
}
```
