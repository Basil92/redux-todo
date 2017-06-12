//let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: (new Date()).toLocaleTimeString(),
        log: (id)=>{console.log(`---- i am log function from add action with id ${id}`)},
        text
    }
}
export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}
export const adding = (text) => {
    return {
        type: 'ADDING',
        text
    }
}
export const addingComplete = (text) => {
    return {
        type: 'ADDING_COMPLETE',
        text
    }
}
export const addTodoAsync = (text) => {
    return (dispatch) => {
        dispatch(adding(text));
        function timeout () {
            dispatch(addTodo(text));
            dispatch(addingComplete(text));
        }
        setTimeout(timeout, 2000);
    }
}