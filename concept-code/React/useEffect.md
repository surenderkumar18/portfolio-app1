# When the Cleanup Function is Called

1. `Before the Component is Unmounted:`

`When a component that uses useEffect is about to be removed from the DOM, React will call the cleanup function to allow for any necessary cleanup, such as canceling network requests, removing event listeners, or stopping timers.`

2. `Before Running the Next Effect:`

`If the dependencies of the useEffect hook change (i.e., the values in the dependency array), the cleanup function will be called before the next effect is executed. This ensures that any resources from the previous effect are cleaned up before setting up the new effect.`

# What is useEffect?

It allows you to perform _side effects_ in function components. Side effects might include **data fetching**, subscriptions, or manually changing the DOM in reaction to state or props changes.

**Dependencies (Optional)**

1. [ without second argument ]() `useEffect(() => {})`

   - the effect function runs after _every_ re-render

2. [ with second argument as blank Array]() `useEffect(() => {}, [])`

   - If the dependencies array is empty, the effect will only run _once_ after the initial render.

3. [ with second argument ]() `useEffect(() => {}, [counter, status])`

   - If any of the provided dependencieseg eg. _[counter, status]_ get changed between renders, the effect function will be re-run.

4. [ Cleanup function ]()
   `useEffect(() => { `
   `    document.title = "Hello world"`  
    `----                       `  
    `     return () => {`
   `         clearTimeout(timer)`
   `      }`
   `})`

   - **If the effect function returns a cleanup function**, [React will execute it before running the effect function again or when the component unmounts](). This is useful for cleaning up any resources, subscriptions, or event listeners created by the effect.
