import { FC, ReactNode, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

const BodyPortal: FC<{ children: ReactNode }> = ({ children }) => {
  const div = useRef<Element | null>(null);

  useLayoutEffect(() => {
    div.current = document.createElement("div");
    div.current.classList.add("portal-container");
    const body = document.querySelector("body");
    body?.appendChild(div.current);

    return () => {
      body?.removeChild(div.current!);
      div.current = null;
    };
  }, []);

  return div.current && createPortal(children, div.current!);
};

export default BodyPortal;
