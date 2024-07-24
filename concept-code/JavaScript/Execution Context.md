[Call Stack]()
[Heap]() `objects, arrays, and other complex data structures are allocated memory on the heap.`
[Event loop]()
[Task Queue]() _callback_
[Promise and Microtask Queue]()

# Execution of Synchronous Code:

The JavaScript engine executes synchronous code line by line, pushing function calls onto the call stack and popping them off when they complete.

# Execution of Asynchronous Operations and Event Handling :

1.  `Asynchronous operations, such as setTimeout, AJAX requests, and user interactions, are handled by the` _event loop_ `and event listeners.`
2.  `When an asynchronous operation completes, its associated` _callback function_ `is pushed onto the` _task queue_.

---

|---------------------------------|
| **Heap** |
| (Dynamic Memory Allocation) |
|---------------------------------|
| Object 1: [ key: value ] |
| Object 2: [ ... ] |
| Array 1: [ 1, 2, 3 ] |
| ... |

| **Call Stack** |
| (Execution Contexts) |
|---------------------------------|
| main() |
| | ... |
| function1() |
| | ... |
| function2() |
| | ... |

---
