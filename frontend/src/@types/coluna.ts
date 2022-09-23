export interface Coluna {
    id?:                     number;
    nome?:                   string;
    tipo?:                   string;
    posicao?:                number;
    nulo?:                   string;
    char_max?:               number;
    is_identity?:            string;
    is_self_referencing?:    string;
    is_updatable?:           string;
    pk?:                     string;
    fk?:                     string;
    tabela_id?:              number;
    permissao?:              number;
    status_id?:              number;
}