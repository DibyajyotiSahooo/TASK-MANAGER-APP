import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  const fetchTasks = async () => {
    const res = await API.get("/task");
    setTasks(res.data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Task Manager</h2>

        <button
          onClick={logout}
          className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
        <button
  className="text-blue-600 ml-4"
  onClick={() => navigate(`/edit/${task._id}`)}
>
  ✏ Edit
</button>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Your Tasks</h2>

          <a
            href="/add-task"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Task
          </a>
        </div>

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
 

           <div
              key={task._id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p className="text-gray-600 mt-2">{task.description}</p>
              <p className="text-sm text-gray-500 mt-1">Status: {task.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
