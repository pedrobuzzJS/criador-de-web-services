import { FieldAction } from "./FieldAction";

export interface GridFields {
    field: string;
    tittle: string;
    description: string;
    type?: string;
    hidden?: boolean;
    key?: boolean;
    collor?: string;
    buttons?: FieldAction[];
  }