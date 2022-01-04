import { Server as IOServer, Server } from "socket.io";
import billSocket from './bill';

export class SocketService {
    private io: Server;
    private static instance: SocketService

    constructor(server) {
        this.io = new Server(server, {
            cors: {
                methods: ["GET", "POST", "PUT", "DELETE"]
            }
        });
    }

    public static getInstance(server) {
        if(!this.instance) {
            this.instance = new SocketService(server);
        }
        return SocketService.instance;
    }

    public connection() {
        this.io.on("connection", (socket) => {
            billSocket.getNewOrder(socket, this.io);
        });
    }
}