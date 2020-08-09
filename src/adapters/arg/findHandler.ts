import arg from 'arg';

import { InitializerType } from '../../initializers';

export function findHandler(type: InitializerType): arg.Handler {
  switch (type) {
    case InitializerType.CONFIRM:
      return Boolean;
    default:
      return String;
  }
}
