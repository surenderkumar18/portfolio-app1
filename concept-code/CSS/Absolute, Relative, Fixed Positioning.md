[static](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

This is the default for every single page element.

[relative](https://css-tricks.com/absolute-positioning-inside-relative-positioning/)
`If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right),` it will have no effect on it’s positioning at all, `it will be exactly as it would be if you left it as position: static; But if you do give it some other positioning attribute, say, top: 10px;, it will shift its position 10 pixels down from where it would normally be.`

**There are two other things that happen when you set position: relative;** on an element that you should be aware of.

1.  `One is that it introduces the` _ability to use z-index_ `on that element, which doesn’t work with statically positioned elements. Even if you don’t set a z-index value, this element will now appear on top of any other statically positioned element. You can’t fight it by setting a higher z-index value on a statically positioned element.`

2.  `The other thing that happens is it` _limits the scope of absolutely positioned child elements._ `Any element that is a child of the relatively positioned element can be absolutely positioned within that block.`

[absolute]

`This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes` top, left, bottom, and right `to set the location. Remember that these values will be relative to the` next parent element with relative (or absolute) positioning. `If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relative to the page itself.`

[fixed]

`A fixed position element is positioned relative to the` viewport,` or the browser window itself. The viewport doesn’t change when the` window is scrolled, `so a fixed positioned element will stay right where it is when the` page is scrolled.

[sticky](https://codepen.io/elad2412/pen/QYLEdK)

`Sticky positioning is really unique! A sticky element will just sit there like a static element,` but as you scroll past it, `if it’s parent element has room (usually: extra height) the sticky element will behave as if it’s fixed until that parent element is out of room. `
