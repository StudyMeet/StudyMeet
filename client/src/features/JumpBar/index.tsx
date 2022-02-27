import React from 'react';
import { UIJumpBar } from './UIJumpBar';

interface Props {
    visible: boolean;
    onBarClick: React.MouseEventHandler;
}

export function JumpBar({ visible, onBarClick }: Props) {
    return <UIJumpBar onBarClick={onBarClick} visible={visible} />
}