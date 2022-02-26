import React from 'react';
import { UIChatField } from './UIChatField';
import { useChatField } from './useChatField';

export function ChatField() {
    const { onSendClick } = useChatField();

    return <UIChatField onSendClick={onSendClick}/>
}