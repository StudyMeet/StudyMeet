import React, { useEffect, useRef, useState } from 'react';
import { Message } from '../../types';
import { Avatar } from '../../components/Avatar';
import { timeOnDay } from '../../utils/time-on-day';
import { ChatMessageMenu } from '../ChatMessageMenu'
import { useIntersection } from '@hooks';

interface Props {
    message: Message;
    markAsRead: (timestamp: Date) => void;
}

export function UIChatMessage({ message, markAsRead }: Props) {
    const [hover, setHover] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const inViewport = useIntersection(ref, '0px');

    useEffect(() => {
        if (inViewport) markAsRead(message.timestamp);
    }, [inViewport])

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return (
        <div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='flex w-full py-3 px-5 hover:dark:bg-gray-900/25 rounded-md'>
            <div className='w-10 mr-3 cursor-pointer flex-none'>
                <Avatar avatarLocation={message.user.avatarLocation}/>
            </div>
            <div className='text-sm cursor-default text-black dark:text-white'>
                <div className='flex space-x-2 items-baseline'>
                    <p className='font-medium text-md hover:underline cursor-pointer'>{`${message.user.firstName} ${message.user.lastName}`}</p>
                    <p className='text-xs text-gray-800 dark:text-gray-300'>{timeOnDay(message.timestamp)}</p>
                </div>
                <div className='cursor-auto break-words overflow-x-hidden'>
                    {message.content}
                </div>
            </div>
            { hover && <ChatMessageMenu />}
        </div>
    )
}