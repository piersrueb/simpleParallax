## Simple Parallax

Simple fixed background parallax effect in vanilla js.

### HTML
```html
<section id="parallax-1" class="parallax"></section>
```
### CSS
```css
#parallax-1{
    background-image: url('../img/myimage.jpg');
    background-repeat: no-repeat;
    height: 400px;
}

.parallax {
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}
```
