// React imports
import { FormEvent, useRef, useEffect } from "react"

// Icons
import { sendIcon } from "../../icons"

// Model
import { Chat } from "../../model/chat"

// Hooks
import { useAppContext } from "../../hooks/useAppContext"

// Interface
import { IMessage } from "../../interface/message"

// Components
import MessageDisplay from "../messageDisplay"
import LeftJoinChatDisplay from "../leftJoinChatDisplay"
import Button from "../button"
import Input from "../input"

// Css
import styles from "./messagesDisplay.module.css"

interface IMessagesDisplayProps {
    chat: Chat
}

function useMessagesDisplay({ chat }: IMessagesDisplayProps){
    const { messageList } = useAppContext()

    const divBottonRef = useRef<HTMLDivElement>(null)

    function onSendMessage(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const refInputMessage = e.currentTarget.message
        const message = refInputMessage.value
        if(chat && message){
          chat.sendMessage(message)
          refInputMessage.value = ""
          refInputMessage.focus()
        }
    }

    useEffect(() => {
        divBottonRef.current?.scrollIntoView({ behavior: "smooth"})
    }, [messageList])


    function renderMessage(message: IMessage, index: number){

        const owner = message.authorId === chat.socket.id
        const key = `${message.authorId}_${index}`

        if(message.type === "message"){
            return (
                <div key={key} className={ owner ? styles.my_message : styles.message_from_another }>
                    <MessageDisplay
                        owner={owner}
                        message={message}  
                    />   
                </div>
            )
        }else{
            if(!owner){
                return(
                    <div key={key} className={styles.leftJoinMessage}>
                        <LeftJoinChatDisplay
                            message={message} 
                        />
                    </div>
                )
            }
        }
    }

    return {
        onSendMessage,
        renderMessage,
        messageList,
        divBottonRef
    }
}

export default function MessagesDisplay( props: IMessagesDisplayProps ){

    const { onSendMessage, renderMessage, messageList, divBottonRef } = useMessagesDisplay(props)

    return(
        <div className={styles.container}>
            <div className={styles.list}>
                {
                    messageList.length > 0 && (
                        messageList.map( (message, index) => {
                            return renderMessage(message, index)
                        } )
                    )
                }
                <div ref={divBottonRef}></div>
            </div>
            <form onSubmit={onSendMessage} className={styles.form}>
                <Input type='text' name='message'  placeholder="Digite uma mensagem..." />
                <Button style={ { borderRadius: "50%" } } >{sendIcon}</Button>
            </form>
        </div>
    )
}