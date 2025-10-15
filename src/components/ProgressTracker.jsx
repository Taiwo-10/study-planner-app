
import React from "react";

const ProgressTracker = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Progress Tracker
      </h2>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {completedTasks} of {totalTasks} tasks completed ({Math.round(progress)}%)
      </p>
    </div>
  );
};

export default ProgressTracker;
