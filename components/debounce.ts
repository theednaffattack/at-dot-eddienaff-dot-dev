//github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/debounce.js

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
export default function debounce(func: () => void, wait: number = 166) {
  let timeout: number;
  function debounced(...args: any) {
    // eslint-disable-next-line consistent-this
    // @ts-ignore
    const that = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    // const what = setTimeout(later, wait);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}
