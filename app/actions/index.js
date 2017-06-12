//let nextTodoId = 0;
import { createAction } from 'redux-actions';

export const addTodoNew = createAction('ADD_TODO_NEW', (text) => ({
        id: (new Date()).toLocaleTimeString(),
        log: (id) => {
            console.log(`---- i am log function from add action with id ${id}`)
        },
        text
}));

export const removeTodoNew = createAction('REMOVE_TODO_NEW', (id) => ({
    id
}));

export const addingNew = createAction('ADDING_NEW', (text) => ({
    text
}));

export const addingCompleteNew = createAction('ADDING_COMPLETE_NEW', (text) => ({
    text
}));

// export const addTodoAsyncNew = createAction('ADD_TODO_ASYNC_NEW', (text) => {
//     return (dispatch) => {
//         dispatch(addingNew(text));
//         function timeout () {
//             dispatch(addTodoNew(text));
//             dispatch(addingCompleteNew(text));
//         }
//         setTimeout(timeout, 2000);
//     }
// })

export const addTodoAsyncNew = (text) => {
    return (dispatch) => {
        dispatch(addingNew(text));
        function timeout () {
            dispatch(addTodoNew(text));
            dispatch(addingCompleteNew(text));
        }
        setTimeout(timeout, 2000);
    }
};