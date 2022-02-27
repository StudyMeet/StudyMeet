import React from 'react';
import { Message } from '../../types';
import { UIChatMessage } from './UIChatMessage';

interface Props {
    message: Message               
    markAsRead: (timestamp: Date) => void;
}

export function ChatMessage({ message, markAsRead }: Props) {
    return (
        <UIChatMessage markAsRead={markAsRead} message={message} />
    );
}