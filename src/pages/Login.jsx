import Navbar from "../components/Navbar";
import styles from "./Login.module.css";
import { useContext, useEffect, useState } from "react";
import { FakeAuthContext } from "../contexts/FakeAuthProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { login, isAuthenticated } = useContext(FakeAuthContext);
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("mohan@gmail.com");
  const [password, setPassword] = useState("qwerty");
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) Navigate("/dashboard");
  }, [isAuthenticated]);

  return (
    <main className={styles.login}>
      <Navbar />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}
