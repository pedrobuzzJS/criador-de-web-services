// import cors from "cors";
import express from "express";
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

export { app };