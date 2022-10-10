export const withLatency = <T extends Array<any>, U>(fn: (...args: T) => U, timeout: number = 1500) => {
  return (...args: T) => new Promise((res) => setTimeout(() => res(fn(...args)), timeout))
}
