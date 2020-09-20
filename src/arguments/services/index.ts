import makeBuildArgumentReader from './buildArgumentReader';
import makeBuildFlag from './buildFlag';

const buildArgumentReader = makeBuildArgumentReader();
const buildFlag = makeBuildFlag();

export { buildArgumentReader, buildFlag };
