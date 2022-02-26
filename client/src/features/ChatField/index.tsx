import React from 'react';
import { UIChatField } from './UIChatField';
import { useChatField } from './useChatField';
interface Props {
    sendMessage: (content: string) => void;
}

export function ChatField({ sendMessage }: Props) {
    const props = useChatField(sendMessage);

    return <UIChatField { ...props } />
}