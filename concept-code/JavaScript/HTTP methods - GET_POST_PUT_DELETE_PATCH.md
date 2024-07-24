**idempotent** [When an HTTP method is _idempotent_ in a REST API, this means that if you send multiple identical requests, only the initial request would cause a change. Therefore, the results returned to the user will not depend on how many times the method has been called.]()

# API methods, also known as HTTP methods

**They determine how a client can interact with the server and manipulate data**. `Here's a detailed discussion on commonly used API methods and when to use each one:`

# GET:

- `The GET method is used to retrieve data from the server.`
- `It should only be used for read-only operations and should not have any side effects on the server.`
- `GET requests are` **idempotent**, `meaning making the same request multiple times yields the same result.`
- `Use GET when retrieving data from a resource, such as fetching a list of items or retrieving a specific item by its identifier.`

# POST:

- `The POST method is used to` _create new resources_ `on the server.`
- `It submits data to be processed by the server and often results in a change or addition to the server's state.`
- `POST requests are` **not idempotent**, `meaning making the same request multiple times may result in different outcomes.`
- `Use POST when submitting data to the server to create a new resource, such as submitting a form or` _creating a new user account_.

# PUT:

-`  The PUT method is used to update existing resources on the server or create a new resource if it does not exist.`

- `It replaces the entire resource with the data sent in the request payload.`
- `PUT requests are` **idempotent**, `meaning making the same request multiple times yields the same result.`
- `Use PUT when updating an existing resource with the complete set of new data, such as` _updating a user's profile_.

# PATCH:

- `The PATCH method is used to partially update existing resources on the server.`
- `It applies modifications to the resource based on the data sent in the request payload.`
- `PATCH requests are not guaranteed to be idempotent, meaning making the same request multiple times may result in different outcomes.`
- `Use PATCH when making partial updates to an existing resource, such as updating` _specific fields_ `of a user's profile.`

# DELETE:

- `The DELETE method is used to remove existing resources from the server.`
- `It deletes the specified resource identified by its URI.`
- `DELETE requests are` **idempotent**, `meaning making the same request multiple times yields the same result (the resource is deleted).`
- `Use DELETE when removing a resource from the server, such as deleting a user account or removing an item from a list.`
