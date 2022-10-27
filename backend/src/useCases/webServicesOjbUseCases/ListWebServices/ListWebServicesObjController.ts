import { Request, Response } from "express";
import { ListWebServicesObjUseCase } from "./ListWebServicesObjUseCase";

export default class ListWebServicesObjController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServicesObjUseCase = new ListWebServicesObjUseCase();
        if (id) {
            const data = await listWebServicesObjUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listWebServicesObjUseCase.getAll();
        return response.json(data);
    };
};