import React from 'react';
import MoreIcon from '@assets/icons/more-horizontal-f.svg';
import PencilIcon from '@assets/icons/pencil-f.svg';

export function ChatMessageMenu() {

    return (
        <div className='relative ml-auto'>
            <div className='-mt-7'>
                <div className='flex rounded-md shadow-md border border-gray-700/25 bg-gray-800 space-x-1'>
                    <div className='hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                        <PencilIcon className='text-gray-200 w-5' />
                    </div>
                    <div className='hover:bg-gray-900 rounded-md p-1 cursor-pointer'>
                        <MoreIcon className='text-gray-200' />
                    </div>
                </div>
            </div>
        </div>
    )
}