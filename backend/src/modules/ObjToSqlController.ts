import { client } from "../infra/prisma/client";
import { Request, Response } from 'express';
import { ListWebServicesObjUseCase } from '../useCases/webServicesOjbUseCases/ListWebServices/ListWebServicesObjUseCase';
import { WebServiceObj } from "@prisma/client";

export default class ObjToSqlController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServiceObjUseCase = await new ListWebServicesObjUseCase();
        const objToSqlController = new ObjToSqlController();
        const teste: WebServiceObj[] = await listWebServiceObjUseCase.getById(Number(id));
        const obj = await JSON.parse(teste[0].obj);
        await objToSqlController.ObjToSql(obj, Number(id));
        return response.status(200).json(
            {
                obj
            }
        );
    };

    async ObjToSql(obj: object, id: number) {
        // console.log(obj);
    };
};