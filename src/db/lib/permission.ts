import type { APIContext } from "astro";
import User from "./user";


export default class Permission {

    private auth_token: string

    constructor(
        private context: APIContext
    ) {
        this.context = context
        let auth = context.request.headers.get("Authorization")
        if (!auth) {
            auth = context.cookies.get(User.LOGIN_TOKEN_NAME)?.value || ""
        }

        this.auth_token = auth

    }


    user() {
        const payload = User.verifyToken(this.auth_token) as any
        return payload
    }

    login() {
        return User.verifyToken(this.auth_token)
    }

    account_status() {
        return this.user().account_status
    }

    login_user() {
        this.login()
        return this.user() as { account: string }
    }

}