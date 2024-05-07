import { useState } from "react";
import PostList from "./components/demo/components/postList";
import Counter from "./components/demo/hooks/counter";
import Input from "./components/demo/hooks/input";
import Navbar from "./components/navbar";
import TaskOne from "./components/tasks/task-1/taskOne";
import TaskThree from "./components/tasks/task-3/taskThree";
import TaskTwo from "./components/tasks/task-2/taskTwo";

function App() {
  const [currentTab, setCurrentTab] = useState<string>("Demo");

  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex flex-1 justify-center items-center">
        {currentTab === "Demo" && (
          <div className="flex gap-4 p-6 border border-black rounded-xl">
            <PostList />
            <Counter />
            <Input />
          </div>
        )}
        {currentTab === "Task 1" && <TaskOne />}
        {currentTab === "Task 2" && <TaskTwo />}
        {currentTab === "Task 3" && <TaskThree />}
      </div>
    </>
  );
}

export default App;