import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
    }
  }
`;

const TodoList = () => {
  const { loading, error, data, startPolling, stopPolling } = useQuery(
    GET_TODOS,
    {
      pollInterval: 5000, // Poll every 5 seconds
    }
  );

  useEffect(() => {
    // Start polling when component mounts
    startPolling(5000);

    // Stop polling when component unmounts
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
