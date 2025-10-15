import React, { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      subject,
      date,
      completed: false,
    };

    onAddTask(newTask);
    setTitle("");
    setSubject("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Task</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
          placeholder="e.g. Study Endocrinology"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
          placeholder="e.g. Neuroanatomy"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Task
      </button>
    </form>
  );
}
