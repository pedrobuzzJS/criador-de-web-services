import api from "./api";
export default class Auth {
    async signIn(username: string, password: string) {
        let USER;
        let TOKEN;
        try {
            await api.post("login", {
                data: JSON.stringify({username, password})
            }).then(response => {
                const { status } = response;
                const { user, token } = response.data;
                USER = user;
                TOKEN = token;
            }).catch(async error => {
                console.log(error);
            }).finally();
        } catch (error) {
            console.log(error);
        };
        return { USER, TOKEN };
    };
    async getPermissions(username: string) {
        try {
            
        } catch (error) {
            
        }
    };
};