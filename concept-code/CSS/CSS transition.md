# How to Use CSS Transitions?

`To create a transition effect, you must specify two things:`

1.  `the CSS property you want to add an effect to`
2.  `the duration of the effect`

`The <div> element has also specified a transition effect for the` _width_ `property, with a duration of 2 seconds:`

div {
width: 100px;
height: 100px;
background: red;
transition: [width] 2s;
`The transition effect will start when the specified CSS property` _width_ `changes value.`
}

div:hover {
[width]: 300px; `here width is the specified CSS property`
}

# suppose if you want animation on transform property

div {
width: 100px;
height: 100px;
background: red;
transition: [transform] 2s;
`The transition effect will start when the specified CSS property` _transform_ `changes value.`
}

div:hover {
[transform]: rotate(180deg) `here transform is the specified CSS property`
}
