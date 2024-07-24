[NavLink]: `props`

- `to`
  - `<NavLink to="/product" >`
- `className`

  - `a callback function`
  - `<NavLink to="/product" className={({isActive}) => isActive ? 'abc' : undefined}>`

- `end`
  - `match last string of path`

[useParam]: `https://www.localhost.com/products/p123`

<Link to="/product:productid">`

`import {useParam} from "react-router-dom"`

`const parm = useParam();`
`parm.productid`
