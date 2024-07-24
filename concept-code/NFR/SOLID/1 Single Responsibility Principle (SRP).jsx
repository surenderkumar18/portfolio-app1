/**
 * 1. Single Responsibility Principle (SRP)
 *
 * A class/component should have only one reason to change,
 * meaning it should have only one job or responsibility.
 * Example:
 *
 * Let's say you have a UserProfile component that handles both rendering the user's profile and fetching user data. This violates the SRP.
 *
 * */

// Violates SRP
import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

// ---- To adhere to the SRP, you can separate data fetching logic into a custom hook.

// Adheres to SRP

const UserProfile = () => {
  const user = useUser(); // separate data fetching logic into a custom hook

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

// useUser.js

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return user;
};
