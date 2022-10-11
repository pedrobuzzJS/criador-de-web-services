import React, { useState } from "react";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import {
        Footer,
        TableList,
        TablesSelection,
        TableModal,
        ModalContainer,
        TableColumn,
        ImageCloseDiv,
        ButtonDiv,
        MountArea, 
        TableRows } 
from "./styles";
import { useFetch } from "../../hooks/useFetch";
import { FaRegWindowClose } from "react-icons/fa";
import { Coluna } from "../../@types/coluna";
import { SelectCheckBoxTable } from "../SelectCheckBoxTable/SelectCheckBoxTable";
import { FieldTypes, GridFields } from "../../Utils/Fields";
import api from "../../services/api";
import { Button } from "../Form/Button/Button";
import UseColunaStore from "../../stores/ColunaStore";

const Campos: GridFields[] = [
    {
        field: "ch",
        title: "",
        description: "",
        type: FieldTypes.CHECKBOX
    },
    {
        field: "id",
        title: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        title: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT
    },
    {
        field: "permissao",
        title: "PK",
        description: "PK",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        title: "Status",
        description: "Status",
        type: FieldTypes.TEXT
    },
    {
        field: "tipo",
        title: "tipo",
        description: "tipo",
        type: FieldTypes.TEXT
    },
    {
        field: "posicao",
        title: "posicao",
        description: "posicao",
        type: FieldTypes.TEXT
    },
    {
        field: "nulo",
        title: "nulo",
        description: "nulo",
        type: FieldTypes.TEXT
    },
    {
        field: "char_max",
        title: "char_max",
        description: "char_max",
        type: FieldTypes.TEXT
    },
    {
        field: "is_identity",
        title: "is_identity",
        description: "is_identity",
        type: FieldTypes.TEXT
    },
    {
        field: "is_self_referencing",
        title: "is_self_referencing",
        description: "is_self_referencing",
        type: FieldTypes.TEXT
    },
    {
        field: "is_updatable",
        title: "is_updatable",
        description: "is_updatable",
        type: FieldTypes.TEXT
    }
];

export const WebServiceMount: React.FC = () => {
    const [ modal, setModal ] = useState(false);
    const [ columns, setSelect ] = useState<Coluna[]>([
        {
            id: 1,
            nome: "id",
        },
        {
            id: 2,
            nome: "nome",
        },
        {
            id: 3,
            nome: "parametros",
        }
    ])
    const { data } = useFetch<any[]>("table");
    const [ Colunas, setColunas ] = useState();
    const changeModalState = () => setModal(!modal);
    
    const deleteColumn = (columnId: number) => {
        deleteColuna(columnId);
    };

    const openModal = async (columnId: number) => {
        try {
            const { data } = await api.get("colunas", {
                params: {
                    id: columnId
                }
            })
            await setColunas(data);
        } catch (error) {
            console.log(error);
        }
        return changeModalState();
    };

    const ColunasStore = UseColunaStore(state => state.colunas);
    const deleteColuna = UseColunaStore(state => state.deleteColuna);

    return (
        <>
            <MountArea>
                <TablesSelection>
                    {ColunasStore && ColunasStore.map( (column, index) => (
                        <TableColumn key={index}>
                            <span>{column.nome}</span>
                            <span>{column.tipo}</span>
                            <span>{column.nulo}</span>
                            <span>{column.char_max}</span>
                            <ImageCloseDiv onClick={() => deleteColumn(Number(column.id))}>
                                <FaRegWindowClose />
                            </ImageCloseDiv>
                        </TableColumn>
                    ) )}
                </TablesSelection>
                <TableList>
                    {
                        data?.length && data.map( (item, index) => (
                            <TableModal
                                key={index}
                                onClick={() => openModal(item.id)}
                                canUse={ColunasStore.length ? false : true}
                            >
                                <span>
                                    {item.nome}
                                </span>
                            </TableModal>
                        ) )
                    }
                </TableList>
            </MountArea>
            <ButtonDiv />
            <Footer />
            <ReactModal
                isOpen={modal}
                onRequestClose={changeModalState}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button
                    type="button"
                    onClick={changeModalState}
                    className="react-modal-close"
                >
                    <AiOutlineClose />
                </button>
                <ModalContainer>
                    <SelectCheckBoxTable columns={Campos} data={Colunas} />
                </ModalContainer>
                <Button buttonDescription={"Inserir Coluna"}></Button>
            </ReactModal>
        </>
    );
};