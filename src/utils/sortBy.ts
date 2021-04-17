// eslint-disable-next-line @typescript-eslint/ban-types
export function sortBy<T extends {}>(key: keyof T) {
  return function compare(a: T, b: T): 1 | -1 {
    return a[key] > b[key] ? 1 : -1;
  };
}
