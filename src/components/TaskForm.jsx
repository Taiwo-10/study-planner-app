import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !subject || !date) return;

    const newTask = {
      id: Date.now(),
      title,
      subject,
      date,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
    setSubject("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 mb-6"
    >
      <h2 className="text-lg font-semibold mb-3">Add Study Task</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md w-full dark:bg-gray-700"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 border rounded-md w-full dark:bg-gray-700"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-md w-full dark:bg-gray-700"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}
