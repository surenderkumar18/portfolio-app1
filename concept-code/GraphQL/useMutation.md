# Explanation of useMutation Hook:

[Mutation Function](addTodo): The `useMutation` hook `returns a tuple`. `The first element` is the `mutation function` (addTodo) that you call to trigger the mutation.

Mutation Result (`{ data, loading, error }`): The second element is an object containing the state of the mutation:

[data]: This holds the data returned from the mutation. In this case, it will contain the new todo item added.
[loading]: This is a boolean that indicates whether the mutation is in progress.
[error]: This holds any error that occurred during the mutation.

Handling Mutation States:

[Loading State](): Display a loading message or spinner while the mutation is in progress.
[Error State](): Display an error message if the mutation fails.
[Success State](): Display a success message or update the UI with the returned data once the mutation is successful.
