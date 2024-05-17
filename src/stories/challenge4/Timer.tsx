import { useEffect, useState } from "react";

interface TimerProps {
}

/**
 * 128秒を渡すと、"02:08"を返す
 * @param count 秒数
 */
function formatTime(count: number): string {
  return `${String(Math.floor(count / 60)).padStart(2, '0')}:${String(count % 60).padStart(2, '0')}`
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Timer = (_props: TimerProps) => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    const interval = setInterval(() => setCount(count => count + 1), 1000)
    return () => clearInterval(interval)
  })

  return (
    <div>{formatTime(count)}</div>
  );
};
