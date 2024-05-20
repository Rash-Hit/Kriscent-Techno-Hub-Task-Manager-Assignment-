"use client";

import { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

const Tasks = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);
  return (
    <main className="flex mx-auto  w-full min-h-screen flex-col items-center p-16 rounded-xl border bg-card text-card-foreground shadow ">
      <div className="text-5xl font-medium">Task Manager</div>
      <div className=" flex justify-between gap-4">
        <div className="w-full flex flex-col mt-8 gap-2">
          <Task key={"1"} />
          <Task key={"2"} />
        </div>
        <div className="mt-8 w-full">
          <AddTask />
        </div>
      </div>
    </main>
  );
};

export default Tasks;
