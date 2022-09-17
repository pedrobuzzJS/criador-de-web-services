import { Request, Response } from "express";
import { ListTipoWebServiceUseCase } from "./ListTipoWebServiceUseCase";

class ListTipoWebServiceController {

    static async handle(request: Request, response: Response) {

        const listStatusController = new ListTipoWebServiceUseCase();

        const data = await listStatusController.getAll();

        return response.json(data);
    }
}

export default ListTipoWebServiceController;