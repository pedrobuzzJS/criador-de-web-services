import { Request, Response } from "express";
import { ListTipoBasesUseCase } from "./ListTipoBasesUseCase";

export default class ListTipoBasesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listTipoBasesUseCase = new ListTipoBasesUseCase();
        if (id) {
            const data = await listTipoBasesUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listTipoBasesUseCase.getAll();
        return response.json(data);
    };
};