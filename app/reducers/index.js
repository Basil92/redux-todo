import {initialState} from '../store/initState';
import { handleActions } from 'redux-actions';

export default handleActions({
        'ADD_TODO': (state = { todos: [] }, action) => {
            const {id, text} = action.payload;
            state.todos.push({id, text});
            console.log(action);
            return {...state, todos: [...state.todos] };
        },
        'ADDING': (state = { todos: [], process:false }, action) => {
            const {text} = action.payload;
            console.log(`ADDING ${text}`);
            return {...state, process: true };
        },
        'ADDING_COMPLETE': (state = { todos: [], process:false }, action) => {
            const {text} = action.payload;
            console.log(`ADDING COMPLETE ${text}`);
            return {...state, process: false };
        },
        'REMOVE_TODO': (state = { todos: [] }, action) => {
            const {id} = action.payload;
            return {...state, todos: state.todos.filter(t => t.id !== id)};
        }
    },
    initialState)

