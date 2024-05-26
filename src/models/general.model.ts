export interface ErrorsState {
  [x: string]: string[];
}

export interface Option {
  key: string | number | null;
  value: string | number | undefined;
  [x: string]: unknown;
}
