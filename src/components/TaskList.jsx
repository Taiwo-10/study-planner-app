import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="w-full max-w-md mt-6">
      <h2 className="text-lg font-semibold mb-3">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
