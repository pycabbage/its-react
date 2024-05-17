import { TodoItem } from "../challenge5-2";
import { Task } from "../challenge5-2/type";

interface TodoListProps {
  tasks: Task[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TodoList = (props: TodoListProps) => {
  return (
    <div>
      {props.tasks.map((task, i) => (
        <TodoItem key={i} task={task} />
      ))}
    </div>
  );
};
