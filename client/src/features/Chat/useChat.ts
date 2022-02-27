import { Message } from '@types';
import { useReducer } from 'react';

type Action =
    | { type: 'SEND_MESSAGE', payload: Message };

type State = Message[];

const reducer = (prevState: State, action: Action) => {
    switch(action.type) {
        case "SEND_MESSAGE":
            return [...prevState, action.payload]
    }
}

export function useChat() {
    const [messages, dispatchMessage] = useReducer(reducer, []); 

    const sendMessage = (content: string) => {
        if (content === "") return;
        dispatchMessage({
            type: 'SEND_MESSAGE',
            payload: {
                content,
                timestamp: new Date(),
                user: {
                    email: "test@email.com",
                    firstName: "Steve",
                    lastName: "Jobs",
                    avatarLocation: "https://www.njwebnest.in/images/steve-jobs.jpg"
                }
            }
        })
    }

    return { messages, sendMessage};
}