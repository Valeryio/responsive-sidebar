# Figma to code Challenge, Week 4 

![Design preview for the coding challenge](/ressources/images/project.png)

## Welcome! 👋

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Integrate the figma portfolio template [here](https://www.figma.com/file/CoMMk4nX6CetMvWxH3dYEG/Illustration-Based-Portfolio-Website-Template-(Community)?type=design&node-id=178%3A362&mode=design&t=r2JkQ2l0nEnTSRMT-1), in HTML, CSS and javascript.

### Links

- Template URL: [Get the figma Template](https://www.figma.com/file/CoMMk4nX6CetMvWxH3dYEG/Illustration-Based-Portfolio-Website-Template-(Community)?type=design&node-id=178%3A362&mode=design&t=r2JkQ2l0nEnTSRMT-1)

## My process
This time, I choosed to build the responsive part of each section gradually, when building the portfolio. That's a good technique to have a full responsive website at the end!


### Built with

- CSS3 custom properties
- Flexbox
- Javascript (a little bit...)
- Full responsive method


### What I learned

I didn't read a bunch of articles when building this project, but I learned this : 

- It's important to not scrum the syntaxes, beetween a preprocessor extensions, and the native CSS functionnalities !

```css
/*- Primary colors defined with SCSS*/

$primary-black: #000;
$primary-white: #fff;
$primary-neutral: #404040;

/* Defined variables with CSS */

:root
{
    --ff-base: 'Sora', sans-serif;

    --fw-bold: 700;
    --fw-regular: 400;
    --fw-semibold: 600;
    --fw-extra-bold: 800;
}

```

- A better way to design buttons in CSS
When the translator change the language of the content, and the button have been only buit with some padding, this one becomes so small, or deformed.

Checkout this [article](https://defensivecss.dev/tip/button-min-width/)
```css

button[data-icon="download"]
{
    gap: 0.8rem;
    @extend %btn;
    @include flex-mixin();
    min-width: 10rem;
    max-height: 4rem;
    border-radius: 0.5rem;
}

```

- How to build an outline font effect ?
```css
.outline-effect
{  
    background-color: black;
    background-clip: text;
    letter-spacing: -1px;
    font-weight: 800;
    -webkit-text-stroke: 6px transparent;  
    color: white;
}

```

### Continued development

Yeah, I have to more invest in layout designing with modular programming and how to organise an project. That's a interesting deal to keep code clean ! Just focus on it for the future days! 🚀🚀🚀

### Useful resources

- [The background-clip property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
- [Understand the vendor prefixes](https://www.youtube.com/watch?v=HSUaRugdwWc)
- [MDN font Styling article](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

