"use client";
import Column from "@/components/column/Column";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Input from "@/components/Input/Input";

const tasksList = [
  {
    id: 1,
    title: "Task 1: Initiate project planning",
  },
  {
    id: 2,
    title: "Task 2: Implement new feature X",
  },
  {
    id: 3,
    title: "Task 3: Fix critical bugs",
  },
  {
    id: 4,
    title: "Task 4: Update documentation",
  },
  {
    id: 5,
    title: "Task 5: Conduct user testing",
  },
  {
    id: 6,
    title: "Task 6: Deploy application to production",
  },
];

export default function Home() {
  const [tasks, setTasks] = useState(tasksList);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);
  const handleDragEnd = (event) => {
    const { active, over } = event;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };
  return (
    <div className="p-5 flex justify-center">
      <div className="border shadow p-5">
        <h1 className="text-3xl">Drag & Drop</h1>

        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <Input onSubmit={addTask} />
          <Column tasks={tasks} />
        </DndContext>
      </div>
    </div>
  );
}
