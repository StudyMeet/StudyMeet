import React, { useState } from "react";


export function useChatField() {
    const [text, setText] = useState("");

    const sendMessage = () => {
        console.log("Sending message: " + text)
        // make request
        setText("");
    }

    const onSendClick = (_: React.MouseEvent) => {
        sendMessage();
    }

    const onSendKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !event.shiftKey) { 
            event.preventDefault();
            sendMessage();
        };
    }

    return { text, setText, onSendClick, onSendKeyPress };
}