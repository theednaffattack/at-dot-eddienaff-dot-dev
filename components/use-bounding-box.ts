import React from "react";

export const useBbox = () => {
  const ref = React.useRef<HTMLDivElement>();
  const [bbox, setBbox] = React.useState({});

  const set = () =>
    setBbox(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  React.useEffect(() => {
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  return [bbox, ref];
};
