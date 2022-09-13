import { response } from 'express';
import { client } from "../../../infra/prisma/client";

export class ListUserUseCase {
  async execute(objFilters?: any) {
      const data = await client.users.findMany({
          orderBy: {
              id: 'asc'
          }
      });
      if (!data) {
          throw new Error("Sem Retorno de Usuários do Sistema");
      };
      return data;
  };
};