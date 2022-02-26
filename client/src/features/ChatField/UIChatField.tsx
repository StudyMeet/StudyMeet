import React, { useEffect, useRef } from 'react';
import PaperPlaneIcon from '@assets/icons/paper-plane-f.svg';

interface Props {
  text: string;
  setText: React.Dispatch<string>;
  onSendClick: React.MouseEventHandler;
  onSendKeyPress: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

export function UIChatField({ onSendClick, onSendKeyPress, text, setText }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    let textArea = textAreaRef.current;
    if (!textArea) return;
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
  }, [text]);

  return (
    <div className="mx-4 mb-4">
      <div className="flex w-full p-1.5 bg-gray-700 rounded-lg text-gray-400 justify-between">
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={onChange}
          onKeyPress={onSendKeyPress}
          placeholder="Send a message"
          className="outline-none bg-transparent flex-1 resize-none my-auto max-h-64 overflow-y-auto"
        />
        <button onClick={onSendClick} className="rounded-lg w-8 h-8 bg-red-500 ml-1">
          <PaperPlaneIcon className="text-white h-5 m-auto pr-0.5" />
        </button>
      </div>
    </div>
  );
}
