export interface SelectList<T = unknown> {
    name: string;
    key?: string;
    selected?: boolean;
    color?: string;
    class?: string;
    disable?: boolean;
    object?: T;
    subList?: SelectList<T>[];
}