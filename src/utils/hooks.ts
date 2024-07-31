import { useCallback, useEffect, useRef } from 'react';

export function useKeyDown(callbackFn: () => void, keys: string[]) {
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const anyKeyPressed = keys.some((key) => e.key === key);

    if (anyKeyPressed) {
      e.preventDefault();
      callbackFn();
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
}

export function useTimeout(callbackFn: () => unknown, delay: number) {
  const callbackRef = useRef(callbackFn);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    callbackRef.current = callbackFn
  }, [callbackFn])
  
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear}
}

export function useDebounce(callbackFn: () => unknown, delay: number, dependencies: unknown[]) {
  const { reset, clear } = useTimeout(callbackFn, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}