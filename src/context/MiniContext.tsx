import { createContext, Dispatch, ReactElement, useReducer } from 'react';
import { EditedTask, Project, Task } from '../types/common';
const initialContext = { activeSidebar: 'dashboard', projects: [], tasks: [] };

type StateType = {
  activeSidebar: string;
  projects: Project[];
  tasks: Task[];
};
type ActionType =
  | { type: 'CHANGE_ACTIVE_PAGE'; payload: string }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'EDIT_TASK'; payload: EditedTask }
  | { type: 'DELETE_TASK'; payload: number | string };

type MiniContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

export const MiniContext = createContext<MiniContextType>({
  state: initialContext,
  dispatch: () => {},
});

const miniContextReducer = (state: StateType, action: ActionType): StateType => {
  if (action.type == 'CHANGE_ACTIVE_PAGE') {
    return { ...state, activeSidebar: action.payload };
  } else if (action.type == 'ADD_PROJECT') {
    return { ...state, projects: [...state.projects, action.payload] };
  } else if (action.type == 'ADD_TASK') {
    return { ...state, tasks: [...state.tasks, action.payload] };
  } else if (action.type == 'EDIT_TASK') {
    const {title, description, status, taskId} = action.payload;
    const filteredTask = state.tasks.filter((task)=> task.id !== taskId);
    const taskToModify = state.tasks.filter((task)=> task.id == taskId);
    const newTask = {...taskToModify[0], title, description, status }
    return {...state, tasks: [...filteredTask, newTask]}
  } else if (action.type == 'DELETE_TASK') {
    return state;
  } else {
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
