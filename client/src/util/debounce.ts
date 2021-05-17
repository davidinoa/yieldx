// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds

export default function debounce<F extends Function>(func: F, wait: number): F {
  let timeoutID: number;
  // conversion through any necessary as it wont satisfy criteria otherwise
  return function wrappedTimeout(this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    timeoutID = window.setTimeout(function () {
      func.apply(context, args);
    }, wait);
  } as any;
}
