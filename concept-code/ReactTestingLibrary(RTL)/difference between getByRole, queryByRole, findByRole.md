`In React Testing Library, getByRole, queryByRole, and findByRole are different methods used for querying DOM elements, each with distinct behaviors and use cases. Here's a breakdown of the differences between them:`

[getByRole]

_Behavior_: `This method queries and returns a single element by its role.`
_Usage_: `It is used when you are` _certain/confident_ `that the element` _exists in the DOM._
_Error Handling_: `If no matching element is found, it` _throws an error immediately._
_Synchronous_: `It does not wait for the element to appear. it expects the element to be there when the query is made.`

[queryByRole]
_Behavior_: `This method queries and returns a single element by its role.`
_Usage_: `It is used when you want to check for the presence or absence of an element in the DOM.`
_Error Handling_: `If no matching element is found, it returns` **null** `instead of throwing an error.`
_Synchronous_: `Like getByRole, it does not wait for the element to appear.`

[findByRole]
_Behavior_: `This method queries and returns a single element by its role.`
_Usage_: `It is used when you need to wait for an element to appear in the DOM` **asynchronously.**
_Error Handling_: `If no matching element is found within the default or specified timeout,` it throws an error.
_Asynchronous_: `It waits for the element to appear, and it returns a promise that resolves when the element is found.`
