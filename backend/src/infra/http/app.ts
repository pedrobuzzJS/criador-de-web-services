// import cors from "cors";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
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
            status: "Error",
            message: "err.message",
        })
    }
)

export { app };