export interface IMessage {
    type: "join_chat" | "left_chat" | "message"
    authorId: string
    authorName: string
    message: string
}

export function isIMessage(obj: any): obj is IMessage {
    return (
        typeof obj === 'object' &&
        obj !== null && // Verifica se obj não é nulo
        typeof obj.type === 'string' && // Verifica se type é uma string
        (obj.type === "join_chat" || obj.type === "left_chat" || obj.type === "message") && // Verifica se type é uma das opções válidas
        typeof obj.authorId === 'string' &&
        typeof obj.authorName === 'string' &&
        typeof obj.message === 'string'
    );
}