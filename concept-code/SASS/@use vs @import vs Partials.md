# Step 1: Project Structure

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

# Step 2: Create SCSS Partials

`Common Styles (_variables.scss, _mixins.scss, _common.scss):`

[\_variables.scss](): `Define your SASS variables.`
[\_mixins.scss](): `Define your mixins.`
[\_common.scss](): `Define common styles used across multiple pages.`

`Page-specific Styles` (_login.scss_, _product.scss_):

[login.scss](): `Styles specific to the login page.`
[product.scss](): `Styles specific to the product page.`
