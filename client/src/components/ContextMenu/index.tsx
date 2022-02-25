import React from 'react';
import { UIContextMenu } from './UIContextMenu';

interface Option {
    text: string;
    icon?: JSX.Element;
    color?: 'red' | 'default';
}

interface Props {
    options: Option[];
}

export function ContextMenu({ options }: Props) {
    return (
        <UIContextMenu options={options} />
    )
}