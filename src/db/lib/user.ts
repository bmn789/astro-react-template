import { Token } from "./token";

export default class User {
    static readonly LOGIN_TOKEN_NAME = "_tok" as const;

    static verifyToken(token: string) {
        return Token.verify(token);
    }
}
