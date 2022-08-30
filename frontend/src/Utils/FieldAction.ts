import { DisableButtonCondition } from "./DisableButtonCondition";

export interface FieldAction{
    button: string;
    icon?: string;
    action: number;
    tittle: string;
    active?: boolean;
    hint?: string;
    color?: string;
    order?: number;
    disableCondition?: DisableButtonCondition;
  }