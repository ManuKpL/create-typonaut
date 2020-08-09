import { setJestCucumberConfiguration } from 'jest-cucumber';

(function setUpCucumber() {
  setJestCucumberConfiguration({
    loadRelativePath: true,
  });
})();
