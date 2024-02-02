// React imports
import { HTMLAttributes } from "react"

// Interface
import { IMessage } from "../../interface/message"

// Css
import styles from "./messageDisplay.module.css"

interface IMessageDisplayProps extends HTMLAttributes<HTMLDivElement> {
    owner: boolean
    message: IMessage
}

export default function MessageDisplay( { message, owner, ...restProps }: IMessageDisplayProps ){
    return (
        <div 
            className={styles.container} 
            {...restProps} 
            style={owner ? {backgroundColor: "lightblue"} : {backgroundColor: "lightgray"}}
        >
            { !owner && <b>{message.authorName}</b>}
            {message.message}
        </div>
    )
}