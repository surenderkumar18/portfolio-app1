import React, { useState } from "react";
import { useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
    }
  }
`;

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO); // useMutation

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { title } }); // mutation function
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Add new todo'
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Added Todo: {data.addTodo.title}</p>}
    </div>
  );
};

export default AddTodoForm;
