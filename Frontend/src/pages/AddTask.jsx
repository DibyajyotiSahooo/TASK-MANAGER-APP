import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/task", { title, description }); 
      alert("Task added successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to add task");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[450px] bg-white p-8 rounded-xl shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-6">Add New Task</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Task Title"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Task Description"
            rows="4"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Add Task
          </button>
        </form>

        <p className="text-center mt-4">
          <a
            href="/dashboard"
            className="text-gray-600 hover:text-black transition"
          >
            ← Back to Dashboard
          </a>
        </p>

      </div>
    </div>
  );
}
