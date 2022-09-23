import { Request, Response } from "express";
import { ListWebServicesUseCase } from "./ListWebServicesUseCase";

export default class ListWebServicesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServicesUseCase = new ListWebServicesUseCase();
        if (id) {
            const data = await listWebServicesUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listWebServicesUseCase.getAll();
        return response.json(data);
    };
};