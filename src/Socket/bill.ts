import { Server, Socket } from "socket.io";

const getNewOrder = (socket: Socket, io: Server) => {
    socket.on("newOrder", (order) => {
        io?.emit("getOrder", order?.id)
    });
}

const billSocket = {
    getNewOrder
}
    

export default billSocket;