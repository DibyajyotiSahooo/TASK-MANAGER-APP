import Task from "../models/Task.js";

// Create Task
export const createTask = async (req, res) => {
  const { title } = req.body;

  const task = await Task.create({
    user: req.user._id,
    title
  });

  res.json(task);
};

// Get all tasks for logged-in user
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(tasks);
};

// Update Task
export const updateTask = async (req, res) => {
  const { title, completed } = req.body;
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  // Ensure the task belongs to the user
  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  task.title = title ?? task.title;
  task.completed = completed ?? task.completed;

  const updatedTask = await task.save();
  res.json(updatedTask);
};

// Delete Task
export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  // Ensure the task belongs to the user
  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await task.deleteOne();
  res.json({ message: "Task deleted successfully" });
};
