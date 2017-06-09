//let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: (new Date()).toLocaleTimeString(),
        text
    }
}
export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}