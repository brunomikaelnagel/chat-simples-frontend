// React import
import { useState, useEffect } from "react"

// Model
import { Chat } from "../model/chat"

// Interface
import { IMessage, isIMessage } from "../interface/message"

export function useChat(){
    const [chat, setChat] = useState<Chat | null>(null)
    const [messageList, setMessageList] = useState<IMessage[]>([])

    function connectChat(nome: string){
        setChat(new Chat(nome))
    }

    function leftChat(){
        chat?.disconnect()
        setChat(null)
    }

    useEffect(() => {
        if(chat?.socket){
            chat.socket.on("receive_message", (messsage) => {
                if(isIMessage(messsage)){
                    setMessageList(prev => [...prev, messsage])
                }
            })
        }

        return () => {
            chat?.socket.off("receive_message")
            setMessageList([])
        }
    }, [chat?.socket])

    return {
        chat,
        messageList,
        connectChat,
        leftChat
    }
}