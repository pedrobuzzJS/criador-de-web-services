import api from "./api";

export default class Auth {
    async signIn() {
        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve({
                    token: "oijdoiawjdowaijdwoaijdawa",
                    user: {
                        name: "admin",
                        email: "admin@admin.com"
                    }
                })
            }, 2000 );
        });
    };
};