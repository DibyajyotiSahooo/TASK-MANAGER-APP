import { useState, useEffect } from "react";
import API from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch existing task
  useEffect(() => {
    const fetchTask = async () => {
      const res = await API.get(`/task/${id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };

    fetchTask();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/task/${id}`, { title, description });
      alert("Task updated!");
      navigate("/dashboard");
    } catch (err) {
      alert("Update failed!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[450px] bg-white p-8 rounded-xl shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-6">Edit Task</h2>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          <input
            type="text"
            value={title}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows="4"
            value={description}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
            Update Task
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
