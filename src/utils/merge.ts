import { AnyObject } from './typeUtils';

export function merge<T extends AnyObject, Y extends AnyObject>(first: T, second: Y): T & Y {
  return { ...first, ...second };
}
