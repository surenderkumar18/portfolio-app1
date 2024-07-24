# 1. Explain the concept of virtual DOM in React and how it improves performance.

**Virtual DOM (VDOM)** `is a lightweight` in-memory `representation of the` actual DOM. `React maintains a virtual DOM to optimize performance by` minimizing direct manipulations `of the actual DOM, which are computationally expensive. When the state of a component changes, React creates a new virtual DOM, compares it with the previous one using a process called` "reconciliation," `and computes the minimal set of changes needed to update the real DOM. This approach reduces the number of expensive DOM operations, resulting in faster and more efficient updates.`

# 2. What are the key differences between functional components and class components in React?

**Functional Components:**

- `Written as JavaScript functions.`
- `Use React hooks (like useState and useEffect) to manage state and side effects.`
- `Simpler and easier to understand.`
- `Stateless until hooks were introduced.`

**Class Components:**

- `Written as ES6 classes.`
- `Use this.state to manage state and lifecycle methods (componentDidMount, componentDidUpdate, etc.) for side effects.`
- `More complex and verbose.`
- `Stateful by nature.`

# 3. What are portals in React? Provide a use case where portals are helpful.

`Portals allow rendering children into a different DOM subtree, outside the parent component's DOM hierarchy.`
`Useful for modals, tooltips, and dropdowns where you need to escape the parent DOM context.`

# 4. Discuss the different ways to declare variables in JavaScript (var, let, const) and when you would use each.

[var](:) `Function-scoped, hoisted, can be re-declared.`
[let](:) `Block-scoped, not hoisted, cannot be re-declared in the same scope.`
[const](:) `Block-scoped, not hoisted, cannot be re-declared or reassigned.`

# 5. What are arrow functions in JavaScript? How do they differ from regular functions?

- `no arguments` object, and `no prototype property.`

# 5. What is the event loop in JavaScript? How does it work?

[Event Loop](): Manages the execution of `async code`. The `call stack` executes `sync code`, while _async tasks go to the task queue_. The event loop continuously checks the call stack and task queue, moving tasks from the queue to the stack when the stack is empty.
