# Use cases:

These are few important, [use cases]():

- `undo functionality`
- `Preserving the previous state`
- `compare the current state with the previous state to make decisions or perform certain actions`
- `compare the current <form> values with the previous <form> values`
- `retain historical information about the state of your application`

Preserving the previous state using refs allows you to maintain a reference to the [_previous value of a state variable across renders_], even when that variable changes. This can be particularly useful when you need to **compare the current state with the previous state to make decisions or perform certain actions**.

For example, in a form where users can make changes, you might want to compare the current form values with the previous form values to detect if any changes have been made and prompt the user to confirm before discarding changes.

Similarly, in an application where you need to keep track of the previous state for undo functionality, having access to the previous state allows you to revert back to it when needed.

Overall, preserving the previous state using refs provides a way to retain historical information about the state of your application, which can be valuable for implementing various features and functionalities.

**--------------------------------------------------------**

# Think about below two snippet

`    useEffect(() => {`
`        inputRef.current.focus();`
`   }, []);`

[ we are able to focus, because it's rendered on the DOM and element is available in DOM to focus in ]()
[ so abaove code will run after render]()

`  useEffect(() => {`
`    prevCountRef.current = count;`
`  }, [count]);`

[ in this snippet, we are updating prevCountRef after it is rendered on the DOM]()
[ so for very first render, if we print it's value, we will get blank]()
[ But as we are updating it's value with count, so it alway's print previous value]()
