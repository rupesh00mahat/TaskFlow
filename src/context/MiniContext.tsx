import { createContext, Dispatch, ReactElement, useReducer } from 'react';
const initialContext = { activeSidebar: 'dashboard' };

type StateType = {
    activeSidebar: string,
}
type ActionType =  {type: 'CHANGE_ACTIVE_PAGE'; payload:string} ;

type MiniContextType = {
    state: StateType;
    dispatch: Dispatch<ActionType>;
}

export const MiniContext = createContext<MiniContextType>({state: initialContext, dispatch: () =>{}});

const miniContextReducer = (state: StateType, action: ActionType): StateType => {
  if(action.type == 'CHANGE_ACTIVE_PAGE'){
    return {...state,activeSidebar: action.payload};
  }
 else{
    return state;
 }
};

type Props = {
  children: ReactElement;
};

const MiniContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(miniContextReducer, initialContext);

  return <MiniContext.Provider value={{ state, dispatch }}>{children}</MiniContext.Provider>;
};

export default MiniContextProvider;
