export function applyMock<T extends (...args: never[]) => unknown>(target: T): jest.MockedFunction<T> {
  return target as never;
}

export function applyAnyMock<T extends (...args: never[]) => unknown>(target: T): jest.Mock {
  return target as never;
}
