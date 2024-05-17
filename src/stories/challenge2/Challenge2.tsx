import { useState } from "react";

interface Challenge1Props {
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Counter = (_props: Challenge1Props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="">カウント：{count}</p>
      <button className="" onClick={() => setCount(prev => prev + 1)}>
        カウントアップ
      </button>
    </div>
  );
};
