import React from 'react';
import {Todo} from './Todo';
import {connect} from 'react-redux';
import {removeTodoNew} from '../actions/index';

const TodoList = ({todos, onRemove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
       return (<Todo todo={todo} key={todo.id} remove={onRemove}/>)
    });
    return (<div >{todoNode}</div>);
}

const mapStateToProps = (state) => (
    {todos: state.todos}
);

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => (
            dispatch(removeTodoNew(id))
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);