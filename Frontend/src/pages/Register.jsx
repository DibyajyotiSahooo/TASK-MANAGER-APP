import { useState } from "react";
import API from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registered successfully!");
      window.location = "/";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />

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

          <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?  
          <a href="/" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
