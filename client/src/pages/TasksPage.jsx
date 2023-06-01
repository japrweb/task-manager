import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h2 className="text-white text-2xl font-bold uppercase text-center mt-4">No tasks yet</h2>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div className="h-screen">
      <h1 className="text-5xl text-white font-bold text-center mb-4">Tasks</h1>
      <div className="grid lg:grid-cols-3 lg:gap-2 md:grid-cols-2 md:gap-2 grid-cols-1 gap-3">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
