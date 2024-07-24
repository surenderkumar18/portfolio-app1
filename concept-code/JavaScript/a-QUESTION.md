# 4. Discuss the different ways to declare variables in JavaScript (var, let, const) and when you would use each.

[var](:) `Function-scoped, hoisted, can be re-declared.`
[let](:) `Block-scoped, not hoisted, cannot be re-declared in the same scope.`
[const](:)`Block-scoped, not hoisted, cannot be re-declared or reassigned.`

# 5. What are arrow functions in JavaScript? How do they differ from regular functions?

- `no arguments` object, and `no prototype property.`

# 5. What is the event loop in JavaScript? How does it work?

[Event Loop](): Manages the execution of `async code`. The `call stack` executes `sync code`, while _async tasks go to the task queue_. The event loop continuously checks the call stack and task queue, moving tasks from the queue to the stack when the stack is empty.
