const removeTodo = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ]
        default:
            return state
    }
}

export default removeTodo;