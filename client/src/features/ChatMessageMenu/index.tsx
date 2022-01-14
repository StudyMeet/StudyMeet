import React from 'react';
import MoreIcon from '@assets/icons/more-horizontal-f.svg';
import PencilIcon from '@assets/icons/pencil-f.svg';
import SmileyIcon from '@assets/icons/smiley-f.svg';

export function ChatMessageMenu() {

    return (
        <div className='relative ml-auto'>
            <div className='-mt-7'>
                <div className='flex rounded-md shadow-md border border-gray-700/25 bg-gray-800 space-x-1'>
                    <button className='sm-tooltip-menu'>
                        <SmileyIcon className='w-5' />
                    </button>
                    <button className='sm-tooltip-menu'>
                        <PencilIcon className='w-5' />
                    </button>
                    <button className='sm-tooltip-menu'>
                        <MoreIcon className='w-5' />
                    </button>
                </div>
            </div>
        </div>
    )
}