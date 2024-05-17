export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const testTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    done: false,
  },
  {
    id: 2,
    title: 'Task 2',
    done: false,
  },
  {
    id: 3,
    title: 'Task 3',
    done: true,
  },
  {
    id: 4,
    title: 'Task 4',
    done: true,
  },
  {
    id: 5,
    title: 'Task 5',
    done: false,
  },
]
