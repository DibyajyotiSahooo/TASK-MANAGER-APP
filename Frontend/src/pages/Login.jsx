import { useState } from "react";
import API from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      window.location = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?  
          <a href="/register" className="text-blue-600 font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
