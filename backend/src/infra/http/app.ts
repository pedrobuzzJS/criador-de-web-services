import { Response } from 'express';
// import cors from "cors";
import express, { NextFunction, Request } from "express";
import "express-async-errors";
import Routes from "./routes/index.routes";

const app = express();

// app.use(
//     cors({

//     })
// );

app.use(
    express.json({
        type: ['application/json', 'text/plain'],
    })
);

app.use(Routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        return response.json({
            status: response.status(500),
            message: err.message,
        })
    }
);

export { app };
