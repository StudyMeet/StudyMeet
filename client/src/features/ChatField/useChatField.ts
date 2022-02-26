import React, { useState } from "react";


export function useChatField(sendMessage: (content: string) => void) {
    const [text, setText] = useState("");

    const send = () => {
        sendMessage(text);
        setText("");
    }

    const onSendClick = (_: React.MouseEvent) => {
        send();
    }

    const onSendKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !event.shiftKey) { 
            event.preventDefault();
            send();
        };
    }

    return { text, setText, onSendClick, onSendKeyPress };
}