import inquirer, { DistinctQuestion, QuestionTypeName } from 'inquirer';

import { ConfirmOption, Option } from '@src/options';
import { AnyObject } from '@src/utils';

function readInquiryType(option: Option): QuestionTypeName {
  if (option instanceof ConfirmOption) {
    return 'confirm';
  }
  return 'input';
}

function buildQuestion(option: Option): DistinctQuestion {
  return {
    type: readInquiryType(option),
    name: option.name,
    message: option.prompt,
    default: option.defaultValue,
  };
}

export async function promptUser(openOptions: Option[]): Promise<AnyObject> {
  const unanswered = openOptions.map(buildQuestion);
  const answers = await inquirer.prompt(unanswered);
  return Object.freeze(answers);
}
