import React, { useRef, useState } from 'react';
import { ChatField } from '../ChatField';
import { ChatMessage } from '../ChatMessage';
import { useChat } from './useChat';
import EyeIcon from '@assets/icons/eye-f.svg';

export function Chat() {
  const { messages, sendMessage } = useChat();  
  const messagesDivRef = useRef<HTMLDivElement>(null);
  const [detached, setDetached] = useState(false);
  console.log(setDetached);

  const onNewMessageBannerClicked = (_: React.MouseEvent) => {
    if (detached && messagesDivRef.current) {
      messagesDivRef.current.scrollTop = messagesDivRef.current.scrollHeight;
    }
  }

  const onMessagesScroll = (event: React.UIEvent) => {
    if (event.currentTarget.scrollHeight - event.currentTarget.scrollTop <= event.currentTarget.clientHeight + 24) {
      setDetached(false);
    } else {
      setDetached(true);
    }
  }
  

  return (
    <div className="flex flex-col justify-between grow h-full overflow-hidden max-h-full">
      <div className={`${!detached && 'invisible'} flex items-center align-middle px-1.5 py-0.5 font-bold text-xs w-full bg-red-500 text-white justify-between`}>
        <p onClick={ onNewMessageBannerClicked } className='grow cursor-pointer'>New messages</p>
        <button className='inline-flex space-x-1 items-center'>
          <p className='font-bold'>Mark as Read</p>
          <EyeIcon />
        </button>
      </div>
      <div onScroll={ onMessagesScroll } ref={messagesDivRef} className="space-y-3 mx-2 my-2 overflow-y-auto grow overflow-x-hidden h-full">
        { messages.map((m, i) => <ChatMessage message={m} key={i}/> )}
      </div>
      <ChatField sendMessage={sendMessage} />
    </div>
  );
}
