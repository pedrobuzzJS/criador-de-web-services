require('dotenv').config();
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

function tokenAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request?.headers?.authorization;

    if (!authToken) {
        return response.status(401).json({
            message: "Invalid Authotization",
        })
    }

    const [, token] = authToken.split(" ");

    try {
        // verify(token, `${process.env.JWT_SECRET}`);
        verify(token, "d13bf4cd-c6f6-4164-8ab7-207fec130d21");
        return next();
    } catch(err) {
        return response.status(401).json({
            message: "Invalid Token",
        })
    }
}

export default tokenAuthenticate;