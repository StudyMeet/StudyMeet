import React from 'react';
import { Message } from '../../types';
import { Avatar } from '../../components/Avatar';
import { timeOnDay } from '../../utils/time-on-day';

interface Props {
    message: Message;
}

export function UIChatMessage({ message }: Props) {
    return (
        <div className='flex w-full m-3'>
            <div className='w-12 mr-3'>
                <Avatar avatarLocation={message.user.avatarLocation}/>
            </div>
            <div className='text-sm cursor-default text-black dark:text-white'>
                <div className='flex space-x-2 items-baseline'>
                    <p className='font-medium hover:underline cursor-pointer'>{`${message.user.firstName} ${message.user.lastName}`}</p>
                    <p className='text-xs'>{timeOnDay(message.timestamp)}</p>
                </div>
                <div>
                    {message.content}
                </div>
            </div>
        </div>
    )
}