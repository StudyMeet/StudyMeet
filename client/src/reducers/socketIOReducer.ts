import { Socket } from 'socket.io-client';
import { PayloadAction } from '@reduxjs/toolkit';

import { CREATE_SOCKET, SocketIOAction } from '../actions/types';

const INITIAL_STATE = {
  socket: Socket
};

export const socketIOReducer = (state = INITIAL_STATE, action: PayloadAction<any, SocketIOAction>) => {
  switch (action.type) {
    case CREATE_SOCKET:
      return {...state, socket: action.payload};
    default:
      return state;
  }
};