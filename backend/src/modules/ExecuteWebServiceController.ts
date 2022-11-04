import { Request, Response } from "express";
import { ListWebServiceRoutesUseCase } from '../useCases/webServiceRoutesUseCase/ListWebServiceRoutes/ListWebServiceRoutesUseCase';
import { ListWebServicesObjUseCase } from '../useCases/webServicesOjbUseCases/ListWebServices/ListWebServicesObjUseCase';
import { WebServiceRoutes } from "@prisma/client";
import { WebServiceObj } from "@prisma/client";
import { client } from "../infra/prisma/client";

export default class ExecuteWebServiceController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServiceRoutesUseCase = await new ListWebServiceRoutesUseCase();
        const webServiceObjResult: WebServiceRoutes[] = await listWebServiceRoutesUseCase.getById(Number(id));
        const executeWebServiceController = new ExecuteWebServiceController();
        try {
            const webServiceObjId = await executeWebServiceController.getSqlComandById(webServiceObjResult[0].werbservoceobj_id);
            try {
                const webServiceResponse = await client.$queryRawUnsafe(webServiceObjId);
                return response.status(200).json(
                    {
                        webServiceResponse
                    }
                );
            } catch (error) {
                return response.status(500).json(
                    {
                        message: "WebService indisponível"
                    }
                );
            };
        } catch (error) {
            return response.status(500).json(
                {
                    message: "WebService indisponível"
                }
            );
        };
    };
    async getSqlComandById(id: number) {
        const listWebServiceObjUseCase = await new ListWebServicesObjUseCase();
        const teste: WebServiceObj[] = await listWebServiceObjUseCase.getById(id);
        return teste[0].sql;
    };
};