import { AnyObject } from '@src/utils';

type Initialize<T> = (destinationPath: string, value: T) => void | Promise<void>;
type OptionInitializer<T> = {
  priority: number;
  name: string;
  defaultValue: T;
  prompt?: string;
  initialize: Initialize<T>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Option<T = any> {
  public readonly name: string;
  public readonly defaultValue: T;
  public readonly prompt: string | undefined;
  public readonly priority: number;

  private readonly initialize: Initialize<T>;
  private value: T | null = null;

  protected constructor(initializer: OptionInitializer<T>) {
    this.name = initializer.name;
    this.defaultValue = initializer.defaultValue;
    this.initialize = initializer.initialize;
    this.priority = initializer.priority;
    this.prompt = initializer.prompt;

    if (!initializer.prompt) {
      this.value = initializer.defaultValue;
    }
  }

  public static shouldPrompt(option: Option): boolean {
    return option.value === null;
  }

  public static updateValueFromMap(map: AnyObject): (option: Option) => void {
    return (option) => {
      if (map[option.name] != null) {
        option.value = map[option.name];
      }
    };
  }

  public get finalValue(): T {
    if (this.value === null) {
      throw new Error(`Option ${this.name} is missing its final value`);
    }
    return this.value;
  }

  public async execute(destinationPath: string): Promise<void> {
    return this.initialize(destinationPath, this.finalValue);
  }
}

export class ConfirmOption extends Option<boolean> {
  public constructor(initializer: OptionInitializer<boolean>) {
    super(initializer);
  }
}

export class InputOption extends Option<string> {
  public constructor(initializer: OptionInitializer<string>) {
    super(initializer);
  }
}
