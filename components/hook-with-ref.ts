// from: https://gist.github.com/thebuilder/fb07c989093d4a82811625de361884e7
import { useCallback, useRef } from "react";

export function useHookWithRefCallback() {
  const ref = useRef<HTMLDivElement>(null);

  const setRef = useCallback((node: HTMLDivElement) => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
      console.log("REF CURRENT SENSED, REF 1ST CONDITION IS OKAY");
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      console.log("NODE SENSED, REF IS READY TO SET");
    }

    // Save a reference to the node
    (ref as React.MutableRefObject<HTMLDivElement>).current = node;
  }, []);

  return [setRef, ref.current];
}

// function Component() {
//   // In your component you'll still recieve a `ref`, but it
//   // will be a callback function instead of a Ref Object
//   const [ref] = useHookWithRefCallback();

//   return <div ref={ref}>Ref element</div>;
// }
