import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { ChatMessage } from './components/ChatMessage';
import { Message } from './types';

const testMsg: Message = {
    user: {
        email: 'no.reply@studymeet.com',
        firstName: 'Olivier',
        lastName: 'Goulet'
    },
    content: 'Hello, world!',
    timestamp: 'Today at 3:13 PM'
}

const tree = <div>
    <ChatMessage message={testMsg}/>
</div>

ReactDOM.render(tree, document.querySelector('#root'));
