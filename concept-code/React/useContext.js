/*  - createContext
    - context.provider
    - useContext
*/
import { createContext, useContext } from "react";

// Create a context
const MyContext = React.createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [value, setValue] = React.useState("default value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Child component consuming context using useContext hook
const ChildComponent = () => {
  const { value, setValue } = React.useContext(MyContext);
  return (
    <div>
      <p>Value from context: {value}</p>
      <button onClick={() => setValue("new value")}>Change Value</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
};

// OTHER EXAMPLE

import { createContext, useContext, useMemo } from "react";

const AuthContext = createContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuth hook to access authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className='navbar-right'>
      {!user && (
        <Link to='/login' onClick={handleLoginLinkClick}>
          Login
        </Link>
      )}
      {user && (
        <>
          <div className='add-product-link'>
            <Link to='/products/add'>Add Product</Link>
          </div>
          <button onClick={handleLogoutLinkClick}>Logout</button>
        </>
      )}
    </div>
  );
};
