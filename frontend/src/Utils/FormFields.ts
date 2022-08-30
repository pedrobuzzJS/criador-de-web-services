import { SelectList } from "./SelectList";

export interface CampoFormulario<T> {
    value: T;
    values: T[];
    key: string;
    ischave: boolean;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    tipo: string;
    placeholder: string;
    options: { key: string, value: string }[];
    filhos: CampoFormulario<any>[];
    disabled: boolean;
    sectiongroup: string;
    hint: string;
    oculto: boolean;
    descricao: string;
    icone: string;
    class: string;
    tamanho: number; // de dados
    // comprimento: string; // visual
    maxnumber: number; // de dados
    minnumber: number; // de dados
    listaSelecionavel?: SelectList<any>;
}