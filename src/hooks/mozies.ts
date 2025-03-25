import { useState } from "react";

export function useMozies() {
  const [mozies, setMozies] = useState<string[]>([])
  const clear = () => setMozies([])
  const push = (m: string) => setMozies(a => [...a, m])
  const shift = () => setMozies(a => a.slice(0, -1))

  return { 
    mozies, set: setMozies, clear, 
    push, shift
  }
}