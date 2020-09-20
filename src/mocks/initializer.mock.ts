import { Initializer, InitializerType } from '@src/initializers';

export function mockInitializerFactory(input?: Partial<Initializer>): Initializer {
  return Object.freeze({
    priority: 10,
    name: 'foo',
    argPath: '--foo',
    flag: true,
    type: InitializerType.CONFIRM,
    defaultValue: false,
    value: null,
    prompt: 'Foo?',
    handler: jest.fn(),
    ...input,
  });
}
