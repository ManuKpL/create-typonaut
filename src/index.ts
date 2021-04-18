import { createTyponaut, readInitialValues, retrieveAdditionalValues } from '@src/commands';
import makeRun from '@src/run';

export const run = makeRun({
  createTyponaut,
  readInitialValues,
  retrieveAdditionalValues,
});
