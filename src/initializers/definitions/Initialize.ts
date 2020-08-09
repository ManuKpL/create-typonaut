export interface InitParams {
  destination: string;
  source: string;
}

export type Initialize = (params: InitParams) => void | Promise<void>;
