import React from 'react';
import PaperPlaneIcon from '@assets/icons/paper-plane-f.svg';

export function ChatField() {
    return (
        <div className='mx-4 mb-4'>
            <div className='flex w-full p-1.5 bg-gray-700 rounded-lg text-gray-400 text-md justify-between'>
                <textarea placeholder="Send a message" className='outline-none bg-transparent flex-1 resize-y overflow-auto' />
                <button className='rounded-lg w-8 h-8 bg-red-500 ml-1'>
                    <PaperPlaneIcon className='text-white h-5 m-auto pr-0.5' />
                </button>
            </div>
        </div>
    )
}