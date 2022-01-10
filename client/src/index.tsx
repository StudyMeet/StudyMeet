import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { ChatLayout } from './layouts';

const tree = <div className='h-screen'>
    <ChatLayout>
    </ChatLayout>
</div>

ReactDOM.render(tree, document.querySelector('#root'));
