import makeCreateTyponaut from './createTyponaut';
import makeReadInitialValues from './readInitialValues';
import makeRetrieveAdditionalValues from './retrieveAdditionalValues';

export const readInitialValues = makeReadInitialValues();
export const retrieveAdditionalValues = makeRetrieveAdditionalValues();
export const createTyponaut = makeCreateTyponaut();
export * from './Command';
