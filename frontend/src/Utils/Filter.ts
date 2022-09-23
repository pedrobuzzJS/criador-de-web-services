export class Filter {
    key: string;
    value: string;
    op: string;
    constructor(option: {key: string, value: string; op: string}) {
        this.key = option.key;
        this.value = option.value;
        this.op = option.op || "=";
    };
};