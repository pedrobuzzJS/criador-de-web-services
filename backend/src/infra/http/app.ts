import { Response } from 'express';
// import cors from "cors";
import express, { NextFunction, Request } from "express";
import "express-async-errors";
import Routes from "./routes/index.routes";
import cors from 'cors';

const app = express();

// app.use(
//     cors({
//         origin: 'http://localhost:3334'
//     })
// );

app.use((request: Request, response: Response, next: NextFunction) => {
    // console.log("tentativa de acesso");
    response.header(
        "Access-Control-Allow-Origin",
        "http://localhost:3000");
    app.use(cors());
    next();
});

app.use(
    express.json({
        type: ['application/json', 'text/plain'],
    })
);


app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        return response.json({
            status: response.status(500),
            message: err.message,
        })
    }
    );
    
app.use(Routes);

export { app };
