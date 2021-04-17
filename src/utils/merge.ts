// eslint-disable-next-line @typescript-eslint/ban-types
export function merge<T extends {}, Y extends {}>(first: T, second: Y): T & Y {
  return { ...first, ...second };
}
