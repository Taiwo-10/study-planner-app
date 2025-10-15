import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask, editTask }) {
  if (tasks.length === 0)
    return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}
