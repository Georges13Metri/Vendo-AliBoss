"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface TransitionWrapperProps {
  children: ReactNode;
  direction?: "x" | "y";
  offset?: string;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  direction,
  offset,
}) => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  const transitionClasses = isVisible
    ? "transition-transform duration-1000 transform translate-0 opacity-100"
    : `opacity-0 transform translate-${direction}-${offset}`;

  return (
    <div ref={ref} className={transitionClasses}>
      {children}
    </div>
  );
};

export default TransitionWrapper;
