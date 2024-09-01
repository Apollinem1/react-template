import { useEffect, useRef, useState } from "react";

export const isEqual = (lhv: any, rhv: any) => {
  return JSON.stringify(lhv) === JSON.stringify(rhv);
};

export const isNotEqual = (lhv: any, rhv: any) => {
  return !isEqual(lhv, rhv);
};

export const getRandomBool = () => {
  return Math.random() < 0.5;
};

export const isObjEmpty = (obj: object): boolean => {
  return (
    obj == undefined ||
    (obj &&
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype)
  );
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomDouble = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();
  const [componentExists, setComponentExists] = useState(true);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const intervalId = setInterval(() => {
        if (componentExists) {
          tick();
        } else {
          clearInterval(intervalId);
        }
      }, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay, componentExists]);

  useEffect(() => {
    return () => {
      setComponentExists(false);
    };
  }, []);

  useEffect(() => {
    setComponentExists(true);
  }, []);
}
