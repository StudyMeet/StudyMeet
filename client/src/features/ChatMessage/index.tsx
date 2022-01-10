import React from 'react';
import { Message } from '../../types';
import { UIChatMessage } from './UIChatMessage';

interface Props {
    message: Message               
}

export function ChatMessage({ message }: Props) {
    return (
        <UIChatMessage message={message} />
    );
}