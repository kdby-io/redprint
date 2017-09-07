export interface Redprint {
  [model: string]: {
    [attribute: string]: {
      [validation: string]: string;
    }
  };
}

export interface Convertable {
  [model: string]: {
    [attribute: string]: {
      [validation: string]: Function;
    }
  };
}
