import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskProvider";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-600 rounded-md p-4 text-white">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex justify-between pt-2">
        <button
          className="bg-slate-300 px-2 py-1 text-zinc-800 text-sm font-semibold rounded-lg duration-700 transition-all hover:bg-slate-800 hover:text-white hover:duration-700 hover:transition-all"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black text-sm font-semibold rounded-lg duration-700 transition-all hover:bg-slate-800 hover:text-white hover:duration-700 hover:transition-all"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black text-sm font-semibold rounded-lg duration-700 transition-all hover:bg-slate-800 hover:text-white hover:duration-700 hover:transition-all"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
