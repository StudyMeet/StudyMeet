import React from 'react';
import { defaultAvatar } from '../constants';

interface Props {
    avatarLocation?: string;
}

export function Avatar({ avatarLocation = defaultAvatar }: Props) {

    return (
        <div className='h-full'>
            <img className='rounded-full' src={avatarLocation} alt='User uploaded avatar.'/>
        </div>
    )
}