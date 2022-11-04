import { Request, Response } from "express";
import { ListWebServicesObjUseCase } from "./ListWebServicesObjUseCase";

export default class ListWebServicesObjController {
    static async handle(request: Request, response: Response) {
        const { id, webservice_id } = request.query;
        const listWebServicesObjUseCase = new ListWebServicesObjUseCase();
        if (id) {
            const data = await listWebServicesObjUseCase.getById(Number(id));
            return response.json(data);
        };
        if (webservice_id) {
            const data = await listWebServicesObjUseCase.getByWebServiceId(Number(webservice_id));
            return response.json(data);
        }
        const data = await listWebServicesObjUseCase.getAll();
        return response.json(data);
    };
};