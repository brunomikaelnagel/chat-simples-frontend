import { io, Socket } from "socket.io-client"

export class Chat {

    #username!: string
    #socket!: Socket

    constructor(nome: string){
        console.log(process.env.REACT_APP_BASE_URL)
        const socket = io(process.env.REACT_APP_BASE_URL??"")
        socket.emit("new_user", nome)
        this.#username = nome
        this.#socket = socket
    }

    sendMessage(message: string){
        this.#socket.emit('message', message)
    }

    disconnect(){
        this.#socket.disconnect()
    }

    get socket(){
        return this.#socket
    }

    get username(){
        return this.#username
    }
}