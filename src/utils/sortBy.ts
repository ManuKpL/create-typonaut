export function sortBy<T extends {}>(key: keyof T) {
  return function compare(a: T, b: T) {
    return a[key] > b[key] ? 1 : -1;
  };
}
