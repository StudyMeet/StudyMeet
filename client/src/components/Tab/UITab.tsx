import React from 'react';

interface Props {
    text: string;
    onSelect?: (index: number) => void;
    activated?: boolean;
    index?: number;
}

export function UITab({ text, index, activated = false, onSelect }: Props) {
    const onClick = () => {
        if (index !== undefined && onSelect) onSelect(index);
    }

    return (
        <button onClick={onClick} className={`${ activated ? 'sm-active-tab' : 'sm-tab' }`}>
            { text }
        </button>
    );
}