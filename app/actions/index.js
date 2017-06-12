import { createAction } from 'redux-actions';

export const addTodo = createAction('ADD_TODO', (text) => ({
        id: (new Date()).toLocaleTimeString(),
        log: (id) => {
            console.log(`---- i am log function from add action with id ${id}`)
        },
        text
}));

export const removeTodo = createAction('REMOVE_TODO', (id) => ({
    id
}));

export const adding = createAction('ADDING', (text) => ({
    text
}));

export const addingComplete = createAction('ADDING_COMPLETE', (text) => ({
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

export const addTodoAsync = (text) => {
    return (dispatch) => {
        dispatch(adding(text));
        function timeout () {
            dispatch(addTodo(text));
            dispatch(addingComplete(text));
        }
        setTimeout(timeout, 1000);
    }
};