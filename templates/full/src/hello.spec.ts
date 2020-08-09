import { loadFeature, defineFeature } from 'jest-cucumber';
import { hello } from './hello';

const helloFeature = loadFeature('./hello.feature');

defineFeature(helloFeature, (scenario) => {
  scenario('Greeting Stark Lords', ({ given, when, then }) => {
    let logger: (name: string) => void;
    let spy: jest.SpyInstance;

    given('a greeting logger', () => {
      logger = (name: string): void => console.log(hello(name));
      spy = jest.spyOn(console, 'log').mockImplementation(jest.fn());
    });

    when(/^asked to greet (\w+)$/, (name: string) => {
      logger(name);
    });

    then(/^should log "(.+)"$/, (greeting: string) => {
      expect(spy).toHaveBeenCalledWith(greeting);
    });
  });
});
