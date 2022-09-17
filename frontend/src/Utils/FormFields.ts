import { SelectList } from "./SelectList";
export interface FormInputs {
    value?: any;
    values?: any[];
    key?: Boolean;
    isChave?: boolean;
    label?: string;
    required?: boolean;
    type?: string;
    placeholder?: string;
    options?: { key: string, value: string }[];
    disabled?: boolean;
    hint?: string;
    hiden?: boolean;
    description?: string;
    icon?: string;
    span?: string;
    tamanho?: number;
    name?: string;
    id?: string;
    pixels?: string;
    list?: SelectList[]
}

export class InputType {
    public static TEXT = "text";
    public static EMAIL = "email";
    public static PASSWORD = "password";
    public static BUTTON = "button";
    public static COLOR = "color";
    public static FILE = "file";
    public static CPF = "cpf";
    public static CURRENCY = "currency";
    public static CEP = "cep";
    public static DATE = "date";
    public static NUMBER = "number";
}