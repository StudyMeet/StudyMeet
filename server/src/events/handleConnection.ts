import { Server } from "socket.io";

export const handleConnection = (io: Server) => {
    io.on("connection", socket => {
        console.log(socket);
    })
}