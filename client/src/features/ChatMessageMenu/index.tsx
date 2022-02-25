import React, { useState } from 'react';
import MoreIcon from '@assets/icons/more-horizontal-f.svg';
import PencilIcon from '@assets/icons/pencil-f.svg';
import SmileyIcon from '@assets/icons/smiley-f.svg';
import TrashIcon from '@assets/icons/trash-alt-f.svg';
import ReplyIcon from '@assets/icons/message-alt-f.svg';
import MarkUnreadIcon from '@assets/icons/eye-close-f.svg';
import { ContextMenu } from '../../components/ContextMenu'

export function ChatMessageMenu() {
    const [moreMenuVisible, setMoreMenuVisible] = useState(false);

    const handleMoreClick = () => {
        setMoreMenuVisible(true);
    }

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
                        <MoreIcon className='w-5' onClick={ handleMoreClick } />
                    </button>
                </div>
            </div>
            {
                moreMenuVisible && <ContextMenu options={[
                    { text: 'Reply', icon: <ReplyIcon />},
                    { text: 'Edit', icon: <PencilIcon /> },
                    { text: 'Mark as unread', icon: <MarkUnreadIcon />},
                    { text: 'Delete', color: 'red', icon: <TrashIcon /> }
                ]} />
            }
        </div>
    )
}