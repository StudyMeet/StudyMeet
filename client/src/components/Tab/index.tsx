import React from 'react';
import { UITab } from './UITab';

interface Props {
    index?: number;
    text: string;
    activated?: boolean;
    onSelect?: (index: number) => void;
}

export function Tab(props: Props) {

    return (
        <UITab 
            text={props.text}
            activated={props.activated}
            onSelect={props.onSelect}
            index={props.index}
        />
    )
}