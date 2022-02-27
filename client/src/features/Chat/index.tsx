import React from 'react';
import { ChatField } from '../ChatField';
import { ChatMessage } from '../ChatMessage';
import { useChat } from './useChat';

export function Chat() {
  const { messages, sendMessage } = useChat();  

  return (
    <div className="flex flex-col justify-between grow h-full overflow-hidden max-h-full">
      <div className="space-y-3 mx-2 my-2 overflow-y-auto grow overflow-x-hidden h-full">
        { messages.map((m, i) => <ChatMessage message={m} key={i}/> )}
      </div>
      <ChatField sendMessage={sendMessage} />
    </div>
  );
}
