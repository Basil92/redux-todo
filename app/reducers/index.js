import {initialState} from '../store/initState';
import { handleActions } from 'redux-actions';

export default handleActions({
        'ADD_TODO_NEW': (state = { todos: [] }, action) => {
            const {id, text} = action.payload;
            state.todos.push({id, text});
            console.log(action);
            return {...state, todos: [...state.todos] };
        },
        'ADDING_NEW': (state = { todos: [], process:false }, action) => {
            const {text} = action.payload;
            console.log(`ADDING ${text}`);
            return {...state, process: true };
        },
        'ADDING_COMPLETE_NEW': (state = { todos: [], process:false }, action) => {
            const {text} = action.payload;
            console.log(`ADDING COMPLETE ${text}`);
            return {...state, process: false };
        },
        'REMOVE_TODO_NEW': (state = { todos: [] }, action) => {
            const {id} = action.payload;
            return {...state, todos: state.todos.filter(t => t.id !== id)};
        }
    },
    initialState)

