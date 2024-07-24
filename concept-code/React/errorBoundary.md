# ErrorBoundary component

[with state]()
`this.state = {`
`  hasError: false,`
`};`

[static getDerivedStateFromError]()
`static getDerivedStateFromError(error) {`
`   // Update state so the next render will show the fallback UI.`
`   return { hasError: true };`
`}`

[componentDidCatch](_to log error_)
`componentDidCatch(error, errorInfo) {`
`    // You can also log the error to an error reporting service`
`    console.log(error, errorInfo);`
`}`

[children prop]() _to render children component_
[fallback prop]() _to render fallback component_

# throw error from children component

[below code is part of child component]()

`const badCode = (count) => {`
`    if (count > 2)` _throw new Error(_`"Break the page!!!!!!!");`
`};`
