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
        MountArea } 
from "./styles";
import { useFetch } from "../../hooks/useFetch";
import { FaRegWindowClose } from "react-icons/fa";
import { Coluna } from "../../@types/coluna";
import { SelectCheckBoxTable } from "../SelectCheckBoxTable/SelectCheckBoxTable";
import { FieldTypes, GridFields } from "../../Utils/Fields";
import api from "../../services/api";
import { Button } from "../Form/Button/Button";
import UseColunaStore from "../../stores/ColunaStore";
import { useNavigate, useParams } from "react-router-dom";
import { Operation } from "../../Utils/Operations";
import { SnackBar } from "../SnackBar/SnackBar";

interface WebServiceMountProps {
    webservice_id: number | null;
};

export const WebServiceMount: React.FC<WebServiceMountProps> = ({ webservice_id, ...props}) => {
    const [ modal, setModal ] = useState(false);
    const { data } = useFetch<any[]>("table");
    const [ usingTable, setUsingTable ] = useState<string | null>(null);
    const [ ColunasBack, setColunas ] = useState();
    const [ colunaService, setColunaService ] = useState<Coluna[]>([]);
    const ColunasStore = UseColunaStore(state => state.colunas);
    const deleteColuna = UseColunaStore(state => state.deleteColuna);
    const [ backResponse, setBackResponse ] = useState<string>();
    const navigate = useNavigate();
    const { op, id } = useParams();
    const [ tableId, setTableId ] = useState<number | null>(null);
    const [ showSnackBar, setShowSnackBar ] = useState<boolean>(false);
    const [ campos ] = useState<GridFields[]>(
        [
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
        ]
    );
    
    const changeModalState = () => {
        // setUsingTable(null);
        setModal(!modal);
    };

    const deleteColumn = async (columnId: number) => {
        await deleteColuna(columnId);
        await setColunaService(ColunasStore);
        if (colunaService.length === 0) setUsingTable(null);
    };

    const openModal = async (columnId: number, columnName: string, table_id: number) => {
        try {
            const { data } = await api.get("colunas", {
                params: {
                    id: columnId
                }
            });
            await setColunas(data);
        } catch (error) {
            console.log(error);
        };
        setTableId(table_id);
        setUsingTable(columnName);
        return setModal(true);
    };

    const handleCloseModal = () => {
        setColunaService(ColunasStore);
        // setUsingTable(null);
        setModal(false);
    };

    const handleSelectFieldsToBack = () => {
        console.log(JSON.stringify(colunaService));
        // navigate(-1);
        submitFormToBakc();
    };

    const submitFormToBakc = async () => {
        switch (Number(op)) {
            case Operation.INSERT:
                try {
                    await api.post("webservicesobj", {
                        data: JSON.stringify(
                            {
                                tableId: tableId,
                                webServiceId: webservice_id,
                                data: colunaService
                            }
                        )
                    }).then(response => {
                        const { status } = response;
                        navigate(-1);
                    }).catch(async error => {
                        console.log(error);
                        await setBackResponse(error.response.data);
                    }).finally(
                        // () => navigate(-1)
                    );
                } catch (error) {
                    console.log(error);
                };
            break;
            case Operation.ALTER:
                try {
                    await api.put("webservicesobj", {
                        data: JSON.stringify(colunaService)
                    }).then(response => {
                        const { status } = response;
                    }).catch(async error => {
                        console.log(error);
                        await setBackResponse(error.response.data);
                    }).finally( () => navigate(-1) );;
                } catch (error) {
                    console.log(error);
                };
            break;
            case Operation.DELETE:
                try {
                    await api.delete("webservicesobj", {
                            params: {
                                id: id
                            }
                        }
                    ).then(response => {
                        const { status } = response;
                        navigate(-1);
                    }).catch(async error => {
                        await setBackResponse(error.response.data.message.code);
                        await setShowSnackBar(true);
                    }).finally(
                    );
                } catch (error) {
                    console.log(error);
                };
            break;
        };
    };

    return (
        <>
            <MountArea>
                <TablesSelection>
                    {colunaService && colunaService.map( (column, index) => (
                        <TableColumn key={index}>
                            <span>{column.nome}</span>
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
                                onClick={() => openModal(item.id, item.nome, item.id)}
                                canUse={usingTable === item.nome ? true : colunaService.length ? false : true}
                            >
                                <span>
                                    {item.nome}
                                </span>
                            </TableModal>
                        ) )
                    }
                </TableList>
            </MountArea>
            <ButtonDiv>
                <Button 
                    buttonDescription="Cadastrar"
                    size="small"
                    onClick={handleSelectFieldsToBack}
                />
            </ButtonDiv>
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
                    <SelectCheckBoxTable
                        columns={campos}
                        data={ColunasBack}
                    />
                </ModalContainer>
                <Button
                    buttonDescription={"Inserir Coluna no Serviço"}
                    onClick={handleCloseModal}
                ></Button>
            </ReactModal>
            <SnackBar
                open={showSnackBar}
                type="Error"
                children={
                    <span>
                        {backResponse}
                    </span>
                }
                onClose={() => setShowSnackBar(false)}
            />
        </>
    );
};