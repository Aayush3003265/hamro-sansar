import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const FakeAuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "mohan@gmail.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function FakeAuthProvider({ children }) {
  //   const navigate = useNavigate;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setIsAuthenticated(true);
      //   navigate("/dashboard");
      return;
    }
    alert("email or password is Incorrect");
  };
  const logout = () => {};
  return (
    <FakeAuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: login,
        logout: logout,
      }}>
      {children}
    </FakeAuthContext.Provider>
  );
}

export { FakeAuthProvider, FakeAuthContext }; // Export the provider
