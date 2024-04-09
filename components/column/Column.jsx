import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import Task from "../Task/Task";

const Column = ({ tasks }) => {
  return (
    <div className="p-2 bg-gray-200 my-2 touch-none">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
