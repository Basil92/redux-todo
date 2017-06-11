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