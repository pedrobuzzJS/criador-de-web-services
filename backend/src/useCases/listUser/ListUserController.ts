import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
    static async handle() {

        const listUserUseCase = new ListUserUseCase();

        const users = listUserUseCase.execute();

        return users;

    }
}