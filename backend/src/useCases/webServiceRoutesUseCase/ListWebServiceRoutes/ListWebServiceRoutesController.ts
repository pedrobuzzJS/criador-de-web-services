import { Request, Response } from "express";
import { ListWebServiceRoutesUseCase } from './ListWebServiceRoutesUseCase';

export default class ListWebServiceRoutesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServiceRoutesUseCase = new ListWebServiceRoutesUseCase();
        if (id) {
            const data = await listWebServiceRoutesUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listWebServiceRoutesUseCase.getAll();
        return response.json(data);
    };
};