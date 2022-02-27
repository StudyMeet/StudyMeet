import React from 'react';
import EyeIcon from '@assets/icons/eye-f.svg';

interface Props {
    visible: boolean;
    onBarClick: React.MouseEventHandler;
}

export function UIJumpBar({ visible, onBarClick }: Props) {
 
    return (
        <div className={`flex items-center align-middle px-1.5 py-0.5 font-bold text-xs w-full bg-red-500 text-white justify-between ${!visible && 'invisible'}`}>
            <p onClick={onBarClick} className='grow cursor-pointer'>New messages</p>
            <button className='inline-flex space-x-1 items-center'>
                <p className='font-bold'>Mark as Read</p>
                <EyeIcon />
            </button>
        </div>
    )
}