import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";
import HolidayNotice from "./components/HolidayNotice";
import CalendarView from "./components/CalendarView";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([task, ...tasks]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Blurred gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 blur-3xl opacity-40"></div>
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex flex-col items-center justify-start flex-grow p-8 space-y-8 w-full">
        {/* Holiday notice (optional announcements or reminders) */}
        <HolidayNotice />

        {/* Task creation form */}
        <TaskForm onAddTask={addTask} />

        {/* Progress tracker showing completion percentage */}
        <ProgressTracker tasks={tasks} />

        {/* Calendar view for scheduling or seeing task distribution */}
        <CalendarView tasks={tasks} />

        {/* List of tasks */}
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
