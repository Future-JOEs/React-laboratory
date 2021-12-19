import { useEffect, useState, useCallback, useReducer } from 'react';

interface ICountDown {
  initCount?: number;
  interval?: number;
  cb?: () => void;
}

const useCountDown = (options: ICountDown) => {
  const { initCount = 10, cb, interval = 1000 } = options;
  const [count, setCount] = useState<number>(initCount);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const reset = useCallback(() => {
    setCount(initCount);
    forceUpdate();
  }, [initCount]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    console.log('useCountdown6：创建定时器');
    const time = setInterval(() => {
      setCount(preCount => {
        if (preCount <= interval) {
          clearInterval(time);
          cb?.();
          return 0;
        }
        return preCount - interval;
      });
    }, interval);
    return () => {
      console.log('useCountdown6：销毁定时器');
      clearInterval(time);
    };
  }, [interval, ignored]);

  return {
    count,
    reset,
  };
};

export default useCountDown;
