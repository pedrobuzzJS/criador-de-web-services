import { client } from "../infra/prisma/client";
import { Request, Response } from 'express';
import { ListWebServicesObjUseCase } from '../useCases/webServicesOjbUseCases/ListWebServices/ListWebServicesObjUseCase';
import { WebServiceObj } from "@prisma/client";

export default class ObjToSqlController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServiceObjUseCase = await new ListWebServicesObjUseCase();
        const objToSqlController = new ObjToSqlController();
        try {
            const webServiceObjResult: WebServiceObj[] = await listWebServiceObjUseCase.getById(Number(id));
            const obj = await JSON.parse(webServiceObjResult[0]?.obj);
            await objToSqlController.ObjToSql(obj, Number(id));
            if (webServiceObjResult) {
                return response.status(200).json(
                    {
                        webServiceObjResult
                    }
                );
            };
        } catch (error) {
            return response.status(404).json(
                {
                    "msg": "Not Found"
                }
            );
        };
    };

    async ObjToSql(obj: any, id: number) {
        const tableId = obj.tableId;
        const webServiceId = obj.webServiceId;
        const objJson: any[] = obj.data;
        let select = "SELECT";
        let from = "FROM";

        await objJson.forEach(el => {
            console.log(el.nome);
        })
    };
};