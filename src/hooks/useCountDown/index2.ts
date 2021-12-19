import { useCallback, useReducer, useEffect, useState, useRef } from 'react';

export default function useCountdown6(
  initCount: number,
  interval = 1000,
  fn: Function,
) {
  const [count, setCount] = useState(initCount);
  // 一个增长的计时器，用于重置倒计时
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const time = useRef<any>();

  const reset = useCallback(() => {
    setCount(initCount);
    forceUpdate();
  }, [initCount]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    console.log('ignore', ignored);
    time.current = setInterval(() => {
      setCount(preCount => {
        if (preCount <= interval) {
          fn();
          clearInterval(time.current);
          return 0;
        }
        return preCount - interval;
      });
    }, interval);
    return () => {
      console.log('useCountdown6：销毁定时器');
      clearInterval(time.current);
    };
  }, [interval, ignored]);

  const pause = () => {
    time.current && clearInterval(time.current);
  };

  const recovery = () => {
    forceUpdate();
  };

  return { count, reset, pause, recovery };
}
