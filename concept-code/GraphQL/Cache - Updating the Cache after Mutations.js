import { gql, useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
    }
  }
`;

const TodoForm = () => {
  let input;
  const [addTodo] = useMutation(ADD_TODO, { // useMutation
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) },
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { title: input.value } });
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
