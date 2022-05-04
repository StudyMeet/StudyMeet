import http from "http";
import express from "express";
import cors from "cors";
import { corsOptions } from "./configs";
import { Server as IOServer } from "socket.io";
import { events } from "./events";

const app = express();
const server = http.createServer(app);
const io = new IOServer(server, {
    cors: corsOptions
});

const PORT = process.env.PORT || 8000;

const main = async () => {
    app.use(cors(corsOptions));
    events.handleConnection(io);

    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}.`);
    })
}

main();