import React, { PropsWithChildren } from 'react';
import { Tab } from '@components';
import { TabGroup } from '@components';
import { Chat } from '@features';

interface Props {

}

export function ChatLayout({ children }: PropsWithChildren<Props>) {
    return (
        <div className='flex h-full'>
            <div className='flex-grow dark:bg-gray-900 h-full'>
                { children }
            </div>
            <div className='dark:bg-gray-800 w-96 flex-none rounded-l-xl'>
                <div className='flex text-sm justify-between align-baseline m-6'>
                    <p className='font-semibold dark:text-gray-500'>Group Chat</p>
                    <div className='flex space-x-2'>
                        <TabGroup>
                            <Tab text="Messages"/>
                            <Tab text="Participants"/>
                        </TabGroup>
                    </div>
                </div>
                <Chat/>
            </div>
        </div>
    )
}