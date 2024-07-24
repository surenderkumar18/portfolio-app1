# Regular Functions

`Behavior of this`:

[Global Context](): `When called in the global context or as a standalone function, this refers to the global object (window in browsers, global in Node.js).`
[Method Context](): `When called as a method of an object, this refers to the object the method is called on.`
[Constructor Context](): `When called with the new keyword, this refers to the newly created instance.`
[Event Handlers](): `When used in event handlers, this refers to the element that received the event.

# Arrow Functions

`Behavior of this:`

[Lexical this Binding](): _Arrow functions do not have their own this context._ `Instead, they inherit this from the surrounding (lexical) scope where they are defined. This means that this inside an arrow function is the same as this outside the arrow function.`

**Summary of Differences**

[Regular Functions](): `The value of` _this_ `depends on how the function is called.`

`In the global context, this refers to the global object.`
`When called as a method,` this `refers to the object the method is called on.`
`When used as a constructor with` new, `"this" refers to the newly created instance.`
`In event handlers, this refers to the element that received the event.`

[Arrow Functions](): `The value of this is lexically bound, meaning it uses this from the surrounding scope where the arrow function is defined. Arrow functions do not have their own this context.`
