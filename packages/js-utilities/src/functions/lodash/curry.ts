export type DebounceFunction<TArgs extends any[]> = {
  (...args: TArgs): void;
  /**
   * Cancels the debounced function
   */
  cancel(): void;
  /**
   * Checks if there is any invocation debounced
   */
  isPending(): boolean;
  /**
   * Runs the debounced function immediately
   */
  flush(...args: TArgs): void;
};

/**
 * Given a delay and a function returns a new function
 * that will only call the source function after delay
 * milliseconds have passed without any invocations.
 *
 * The debounce function comes with a `cancel` method
 * to cancel delayed `func` invocations and a `flush`
 * method to invoke them immediately
 */
export function debounce<TArgs extends any[]>(
  { delay }: { delay: number },
  func: (...args: TArgs) => any
) {
  let timer: NodeJS.Timeout | undefined = undefined;
  let active = true;

  const debounced: DebounceFunction<TArgs> = (...args: TArgs) => {
    if (active) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        active && func(...args);
        timer = undefined;
      }, delay);
    } else {
      func(...args);
    }
  };
  debounced.isPending = () => {
    return timer !== undefined;
  };
  debounced.cancel = () => {
    active = false;
  };
  debounced.flush = (...args: TArgs) => func(...args);

  return debounced;
}

export type ThrottledFunction<TArgs extends any[]> = {
  (...args: TArgs): void;
  /**
   * Checks if there is any invocation throttled
   */
  isThrottled(): boolean;
};

/**
 * Given an interval and a function returns a new function
 * that will only call the source function if interval milliseconds
 * have passed since the last invocation
 */
export function throttle<TArgs extends any[]>(
  { interval }: { interval: number },
  func: (...args: TArgs) => any
) {
  let ready = true;
  let timer: NodeJS.Timeout | undefined = undefined;

  const throttled: ThrottledFunction<TArgs> = (...args: TArgs) => {
    if (!ready) return;
    func(...args);
    ready = false;
    timer = setTimeout(() => {
      ready = true;
      timer = undefined;
    }, interval);
  };
  throttled.isThrottled = () => {
    return timer !== undefined;
  };
  return throttled;
}

type Cache<T> = Record<string, { exp: number | null; value: T }>;
export type Func<TArgs = any, KReturn = any | void> = (...args: TArgs[]) => KReturn;

function memoize<T>(
  cache: Cache<T>,
  func: Func<any, T>,
  keyFunc: Func<string> | null,
  ttl: number | null
) {
  return function callWithMemo(...args: any): T {
    const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args });
    const existing = cache[key];
    if (existing !== undefined) {
      if (!existing.exp) return existing.value;
      if (existing.exp > new Date().getTime()) {
        return existing.value;
      }
    }
    const result = func(...args);
    cache[key] = {
      exp: ttl ? new Date().getTime() + ttl : null,
      value: result,
    };
    return result;
  };
}

/**
 * Creates a memoized function. The returned function
 * will only execute the source function when no value
 * has previously been computed. If a ttl (milliseconds)
 * is given previously computed values will be checked
 * for expiration before being returned.
 *
 * @example
 *
 * const timestamp = memo(() => Date.now())
 *
 * const now = timestamp()
 * const later = timestamp()
 *
 * now === later // => true
 */
export function memo<TFunc extends (...args: any) => any>(
  func: TFunc,
  options: {
    key?: Func<any, string>;
    ttl?: number;
  } = {}
) {
  return memoize({}, func, options.key ?? null, options.ttl ?? null) as TFunc;
}
