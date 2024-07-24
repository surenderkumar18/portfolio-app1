// write code to create login context and how to use it

import { createContext } from "react";

const authContext = createContext();

const ContextProvider = ({ children }) => {
  const user = { name: "TestUser" };

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export default ContextProvider;


