import { useState } from "react";

export default function TaskItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [subject, setSubject] = useState(task.subject);

  const handleSave = () => {
    editTask({ ...task, title, subject });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow flex justify-between items-center">
      {isEditing ? (
        <div className="flex-1 space-x-2">
          <input
            className="p-1 border rounded-md dark:bg-gray-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="p-1 border rounded-md dark:bg-gray-700"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-500">
            {task.subject} — {task.date}
          </p>
        </div>
      )}

      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
