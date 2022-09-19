import { FieldAction } from "./FieldAction";
export interface GridFields {
    field: string;
    tittle: string;
    description: string;
    type: number;
    hidden?: boolean;
    key?: boolean;
    collor?: string;
    buttons?: FieldAction[];
};
export class FieldTypes {
  public static TEXT = 1;
  public static BUTTON = 2;
  public static BOOLEAN = 3;
};