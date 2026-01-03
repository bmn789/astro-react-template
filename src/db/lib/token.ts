import jwt from "jsonwebtoken";

const JWT_SECRET = "ytghbnm"

export const Token = {
    create(payload: object, options: Pick<jwt.SignOptions, "expiresIn">) {
        return jwt.sign(payload, JWT_SECRET, options);
    },
    verify(token: string) {
        return jwt.verify(token, JWT_SECRET);
    }
}