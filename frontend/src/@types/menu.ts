import { IconBaseProps } from "react-icons";

export type LinkMenu = {
    id: number,
    nome: string,
    parametros?: string,
    icone: string,
    rota: string | null,
    filhos?: LinkMenu[],
    possuifilhos: boolean,
    component?: string,
    pai_id: number | null,
    ordem?: number,
    desabilitado?: boolean
    papel?: number,
    permissao?: number,
    status_id?: number,
    created_at?: Date,
    updated_at?: Date,
    icon?: React.ComponentType<IconBaseProps>;
};