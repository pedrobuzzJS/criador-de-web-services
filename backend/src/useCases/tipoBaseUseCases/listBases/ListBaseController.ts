import { Request, Response } from "express";
import { ListBasesUseCase } from "./ListBasesUseCase";

export default class ListBasesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listBasesUseCase = new ListBasesUseCase();
        if (id) {
            const data = await listBasesUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listBasesUseCase.getAll();
        return response.json(data);
    };
};