export interface Select {
    table: string;
    columns: string[];
    where?: any;
    order_by?: string[];
    sub_select?: Select[]
};