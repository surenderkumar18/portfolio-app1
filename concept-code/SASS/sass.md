[modular, maintainable, and scalable]()

Variables
Nesting
Mixins
Functions
Partials & Importing
Inheritance
The '&' Operator
Control Directives
Interpolation
Placeholders

# Reference symbol ( & )

`.btn {`
`   display: inline-block;`
`   padding: 15px 32px;`
`   `_&--red_ `{`
`       background-color: #ff0000; // Red`
`   }`
`   `_&:hover_` {`
`    background-color: #fff; // White`
`   }`
`}`

# Partials and @import @use directive

`(look into file @use vs @import vs Partials.scss)`

`   When we` **@import** `common variables and mixins in both the main.scss file and the individual page-specific `
`    SCSS files (login.scss and product.scss), it can indeed lead to` _duplication_ `of those definitions `
`    in the final compiled CSS. This isn't ideal, as it can increase the size of your CSS files unnecessarily.`

[Use _@use_ instead of _@import_ to ensure each file is only included once.]()

`   The` _@use_ `rule only includes a module` _once_`, no matter how many times you use it.`
`   This ensures that variables and mixins are` _not duplicated in the final output._
`   Using` [as \*]() `allows you to use the imported variables and mixins directly without prefixing`
`   them with the module name.`

`    @use './variables' as *;`
`    @use './mixins' as *;`

`    .login-container {`
`       background-color: $primary-color;`
`       @include respond-to('phone') {`
`           background-color: $secondary-color;`
`        }`
`    }`

# Interpolation

`To interpolate an expression we need to wrap the expression using #{ }.`

# @content directive

# %placeholders

`In SASS a placeholder looks and acts a lot like a class selector, only it starts with a % and it is not included in the CSS output.`
`However, the preprocessor will skip %placeholder and it won’t be included in the final CSS file.`

# Variables

# Nesting

# Mixins

# SASS Functions - _Sass functions can receive arguments and `return` a `single value`._

# SASS Inheritance **@extend**

`.button {`
`   background-color: #0000FF; // Blue`
`   padding: 15px 32px;`
`   text-align: center;`
`}`

`.button-secondary {`
`   `_@extend .button;_
`   background-color: #4CAF50; // Green`
`}`

# @if and @else directives

src/
│
├── styles/
│ ├── \_variables.scss
│ ├── \_mixins.scss
│ ├── \_common.scss
│ ├── login.scss
│ ├── product.scss
│ └── main.scss
│
├── components/
│ ├── Login.js
│ ├── Product.js
│ └── App.js
│
└── index.js
