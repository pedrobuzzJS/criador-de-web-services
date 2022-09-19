import { Request, Response } from "express";
import { ListTipoWebServiceUseCase } from "./ListTipoWebServiceUseCase";

class ListTipoWebServiceController {

    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const tipoWebServiceController = new ListTipoWebServiceUseCase();
        if (id) {
            const data = await tipoWebServiceController.getById(Number(id));
            return response.json(data);
        };
        const data = await tipoWebServiceController.getAll();
        return response.json(data);

    };
};

export default ListTipoWebServiceController;