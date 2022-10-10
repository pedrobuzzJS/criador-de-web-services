import { Coluna } from "./coluna";

export interface SelectWebService {
    table: string;
    columns: Coluna[];
    where?: any;
    order_by?: string[];
    sub_select?: SelectWebService[]
};