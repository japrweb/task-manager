import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/taskform" element={<TaskForm />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
