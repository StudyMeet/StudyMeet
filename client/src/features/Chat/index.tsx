import React, { useEffect, useRef, useState } from 'react';
import { ChatField } from '../ChatField';
import { ChatMessage } from '../ChatMessage';
import { useChat } from './useChat';
import { JumpBar } from '../JumpBar';

function scrollToBottom<T extends HTMLElement>(ref: React.RefObject<T>) {
  if (ref.current) {
    ref.current.scrollTop = ref.current.scrollHeight;
  }
}

export function Chat() {
  const { messages, sendMessage } = useChat();  
  const messagesDivRef = useRef<HTMLDivElement>(null);
  const [detached, setDetached] = useState(false);
  const [lastRead, setLastRead] = useState<number>(0)

  const onJumpBarClick = (_: React.MouseEvent) => {
    if (detached) scrollToBottom(messagesDivRef);
  }

  const onMessagesScroll = (event: React.UIEvent) => {
    const overlapHeight = 24;
    if (event.currentTarget.scrollHeight - event.currentTarget.scrollTop <= event.currentTarget.clientHeight + overlapHeight) {
      setDetached(false);
    } else {
      setDetached(true);
    }
  }

  console.log(detached);
  const markAsRead = (timestamp: Date) => {
    if (lastRead < timestamp.getTime()) {
      setLastRead(timestamp.getTime());
    }
  }

  const latestMessageTime = messages.length != 0 ? messages[messages.length - 1].timestamp.getTime() : 0; 

  useEffect(() => {
    if (lastRead !== latestMessageTime) setDetached(true);
  }, [lastRead, latestMessageTime, messagesDivRef, detached])

  return (
    <div className="flex flex-col justify-between grow h-full overflow-hidden max-h-full">
      <JumpBar 
        onBarClick={onJumpBarClick} 
        visible={ lastRead !== latestMessageTime } 
      />
      <div onScroll={ onMessagesScroll } ref={messagesDivRef} className="space-y-3 mx-2 my-2 overflow-y-auto grow overflow-x-hidden h-full">
        { messages.map((m, i) => <ChatMessage markAsRead={markAsRead} message={m} key={i}/> )}
      </div>
      <ChatField sendMessage={sendMessage} />
    </div>
  );
}