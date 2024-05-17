import { useState } from "react";
import { Task } from "./type";

interface TodoItemProps {
  task: Task;
  onChange?: (task: Task) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TodoItem = ({task, onChange}: TodoItemProps) => {
  const [done, setDone] = useState(task.done)
  return (
    <div className="border-2 border-slate-400 rounded-sm p-2 m-2 flex flex-row gap-2 cursor-default hover:bg-slate-100 active:bg-slate-200 transition-[background-color] min-w-36" onClick={() => {
      onChange?.({...task, done: !done})
      setDone(prev => !prev)
    }}>
      <input type="checkbox" id={`done-${task.id}`} name={`done-${task.id}`} checked={done} onChange={() => {
        onChange?.({...task, done: !done})
        setDone(prev => !prev)
      }} />
      <label htmlFor={`done-${task.id}`} className="select-none cursor-default">{task.title}</label>
    </div>
  );
};
