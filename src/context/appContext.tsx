// React import
import { createContext, ReactNode } from "react";

// Hook
import { useChat } from "../hooks/useChat";

// Model
import { Chat } from "../model/chat";

// Interface
import { IMessage } from "../interface/message";

export interface IAppContextProps {
    chat: Chat | null;
    messageList: IMessage[];
    connectChat: (nome: string) => void;
    leftChat: () => void
} 

export const AppContext = createContext({} as IAppContextProps);

export function AppProvider({children} : {children: ReactNode} ){
    const { chat, messageList, connectChat, leftChat } = useChat()

    return (
        <AppContext.Provider value={{
            chat,
            messageList,
            connectChat,
            leftChat
        }} >
            {children}
        </AppContext.Provider>
    )
}