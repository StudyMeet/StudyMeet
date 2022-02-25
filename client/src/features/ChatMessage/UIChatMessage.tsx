import React, { useState } from 'react';
import { Message } from '../../types';
import { Avatar } from '../../components/Avatar';
import { timeOnDay } from '../../utils/time-on-day';
import { ChatMessageMenu } from '../ChatMessageMenu'

interface Props {
    message: Message;
}

export function UIChatMessage({ message }: Props) {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='flex w-full py-3 px-5 hover:dark:bg-gray-900/25 rounded-md'>
            <div className='w-10 mr-3 cursor-pointer'>
                <Avatar avatarLocation={message.user.avatarLocation}/>
            </div>
            <div className='text-sm cursor-default text-black dark:text-white'>
                <div className='flex space-x-2 items-baseline'>
                    <p className='font-medium text-md hover:underline cursor-pointer'>{`${message.user.firstName} ${message.user.lastName}`}</p>
                    <p className='text-xs text-gray-800 dark:text-gray-300'>{timeOnDay(message.timestamp)}</p>
                </div>
                <div className='cursor-auto'>
                    {message.content}
                </div>
            </div>
            { hover && <ChatMessageMenu />}
        </div>
    )
}