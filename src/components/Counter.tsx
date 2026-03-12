import { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({ value, duration = 2, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setCount(latest);
    });
  }, [displayValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
