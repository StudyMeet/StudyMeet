import React from 'react';
import PaperPlaneIcon from '@assets/icons/paper-plane-f.svg';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  text: string;
  setText: React.Dispatch<string>;
  onSendClick: React.MouseEventHandler;
  onSendKeyPress: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

export function UIChatField({ onSendClick, onSendKeyPress, text, setText }: Props) {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="mx-4 mb-4">
      <div className="flex w-full p-1.5 bg-gray-700 rounded-lg text-gray-400 justify-between">
        <TextareaAutosize 
            value={text}
            onChange={onChange}
            onKeyPress={onSendKeyPress}
            className='outline-none bg-transparent flex-1 resize-none my-auto'
            placeholder="Send a message"
            maxRows={12}
        />
        <button onClick={onSendClick} className="rounded-lg w-8 h-8 bg-red-500 ml-1">
          <PaperPlaneIcon className="text-white h-5 m-auto pr-0.5" />
        </button>
      </div>
    </div>
  );
}
