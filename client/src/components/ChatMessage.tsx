import React from 'react';
import { Message } from '../types';
import { Avatar } from './Avatar';

interface Props {
    message: Message               
}

export function ChatMessage({ message }: Props) {
    return (
        <div className='flex w-full m-3'>
            <div className='w-12 mr-3'>
                <Avatar avatarLocation={message.user.avatarLocation}/>
            </div>
            <div className='text-sm cursor-default'>
                <div className='flex space-x-2 items-baseline'>
                    <p className='font-medium hover:underline cursor-pointer'>{`${message.user.firstName} ${message.user.lastName}`}</p>
                    <p className='text-xs'>{message.timestamp}</p>
                </div>
                <div>
                    {message.content}
                </div>
            </div>
        </div>
    );
}