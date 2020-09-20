import { BuildFlag } from '../use-cases';

export default function makeBuildFlag(): BuildFlag {
  return function buildFlag(path, parser) {
    const fullFlag = path;
    const alias = path.slice(1, 3);

    return {
      [fullFlag]: parser,
      [alias]: fullFlag,
    };
  };
}
