import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h3>Task Manager</h3>

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <a href="/">Login</a>
          <a href="/register">Register</a>
        </>
      )}
    </nav>
  );
}
