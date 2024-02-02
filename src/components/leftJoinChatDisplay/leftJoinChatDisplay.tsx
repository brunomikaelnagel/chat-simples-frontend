// React import
import { HTMLAttributes } from "react"

// Interface
import { IMessage } from "../../interface/message"

// Css
import styles from "./leftJoinChatDisplay.module.css"

interface ILeftJoinChatDisplayProps extends HTMLAttributes<HTMLDivElement> {
    message: IMessage
}

export default function LeftJoinChatDisplay( { message, ...restProps }: ILeftJoinChatDisplayProps ){
    let text: string

    if(message.type === "join_chat"){
        text = `${message.authorName} entrou no chat`
    }else{
        text = `${message.authorName} saiu no chat`
    }

    return(
        <div className={styles.container} {...restProps}>
            {text}
        </div>
    )
}