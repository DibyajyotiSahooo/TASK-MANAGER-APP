import API from "../api/axios";

export default function TaskItem({ task, refresh }) {
  const toggle = async () => {
    await API.put(`/tasks/${task._id}`, {
      completed: !task.completed,
    });
    refresh();
  };

  const remove = async () => {
    await API.delete(`/tasks/${task._id}`);
    refresh();
  };

  return (
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button onClick={toggle}>
        {task.completed ? "Undo" : "Done"}
      </button>

      <button onClick={remove}>Delete</button>
    </div>
  );
}
