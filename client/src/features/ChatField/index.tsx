import React from 'react';
import { UIChatField } from './UIChatField';
import { useChatField } from './useChatField';

export function ChatField() {
    const props = useChatField();

    return <UIChatField { ...props } />
}