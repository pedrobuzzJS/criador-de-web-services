import { client } from "../../../infra/prisma/client";

export class CreateWebServicesUseCase {
    async create(requestData: any) {
        console.log(requestData.data);
        const info = requestData.data;
        const createWebService = await client.webService.create(
            {
                // data: {
                //     ...info
                // }
                data: {
                    nome: info.nome,
                    descricao: info.descricao,
                    prover: info.prover,
                    consumir: info.consumir,
                    varsao: info.varsao,
                    status_id: info.status_id,
                }
            }
        );
        return createWebService;
    };
};