import socketio, {Socket} from 'socket.io-client';
import { PayloadAction } from '@reduxjs/toolkit';

import { CREATE_SOCKET, SocketIOAction } from './types';
import 'dotenv/config'; 

export const createSocket = (): PayloadAction<Socket, SocketIOAction> | null  => {
  if (!process.env.SERVER_URL) return null;

  return {
    type: CREATE_SOCKET,
    payload: socketio(process.env.SERVER_URL)
  };
};