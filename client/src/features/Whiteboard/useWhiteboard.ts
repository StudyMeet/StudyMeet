import { useAppDispatch, useAppSelector } from '../../hooks';
import { CREATE_SOCKET } from '../../actions/types';

const useWhiteboard = () => {
  const dispatch = useAppDispatch();
  dispatch({ type: CREATE_SOCKET, payload: null });
  const socket = useAppSelector((state) => state.socketIO.socket);
  console.log(socket);

  return "socket";
};

export default useWhiteboard;
