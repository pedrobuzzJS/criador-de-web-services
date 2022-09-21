import { Request, Response } from "express";
import { CreateStatusUseCase } from './CreateStatusUseCase';
class CreateStatusController {
    static async handle(request: Request, response: Response) {
        console.log("aqui");
        console.log(request.body);
        
        return response.status(204).json();
    };
};

export default CreateStatusController;