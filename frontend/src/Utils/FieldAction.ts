import { DisableButtonCondition } from "./DisableButtonCondition";

export interface FieldAction{
    button: string;
    action: number;
    rotina?: string;
    tittle: string;
    icon?: string;
    active?: boolean;
    hint?: string;
    color?: string;
    order?: number;
    disableCondition?: DisableButtonCondition;
  }