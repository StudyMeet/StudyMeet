import React from 'react';
//import { ChatMessage } from '../ChatMessage';
import { ChatField } from '../ChatField';

export function Chat() {
  return (
    <div className="flex flex-col justify-between grow overflow-hidden" >
      <div className="space-y-3 mx-2 my-2 overflow-y-auto">
        {/* Add ChatMessages here */}
      </div>
      <ChatField />
    </div>
  );
}
