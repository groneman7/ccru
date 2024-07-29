import { useCallback, useEffect } from 'react';

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