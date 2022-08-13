export type LinkMenu = {
    id: number,
    nome: string,
    parametros?: string,
    rota: string,
    icone?: string,
    pai_id?: number,
    ordem?: number,
    desabilitado?: boolean
    papel?: number,
    permissao?: number,
    status_id?: number,
    created_at?: Date,
    updated_at?: Date,
}