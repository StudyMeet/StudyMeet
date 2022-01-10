import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { ChatMessage } from './features/ChatMessage';
import { Message } from './types';

const testMsg: Message = {
    user: {
        email: 'no.reply@studymeet.com',
        firstName: 'Olivier',
        lastName: 'Goulet'
    },
    content: 'Hello, world!',
    timestamp: new Date() 
}

const tree = <div>
    <ChatMessage message={testMsg}/>
</div>

ReactDOM.render(tree, document.querySelector('#root'));
