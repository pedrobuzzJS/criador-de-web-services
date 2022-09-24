import { Request, Response } from "express";
import { CreateWebServicesUseCase } from "./CreateWebServicesUseCase";

export default class CreateWebServicesController {
    static async handle(request: Request, response: Response) {
        await console.log(request.body);
        const createWebServicesUseCase = new CreateWebServicesUseCase();
        const create = createWebServicesUseCase.create(request.body);
        // return response.json(data);
    };
};