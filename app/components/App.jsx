import React from 'react';
import {connect} from 'react-redux';
import Title from './Title';
import TodoList from './TodoList';
import TodoForm from './TodoForm2';
import {addTodo, removeTodo} from  '../actions'

class TodoApp extends React.Component {

    render() {
        const {hello, todos, onRemove, onAdd} = this.props;
        const todoCount = todos.length;
        console.warn('App:render',this.props );
        return (
            <div>
                <div>{hello}</div>
                <Title todoCount={1}/>
                <TodoForm onSubmit={onAdd}/>
                <TodoList todos={todos} remove={onRemove}/>
            </div>
        );
    }
}


function mapState(state, ownProps) {

    const {hello} = ownProps;
    return {todos: state.todos , hello: 'MAP:   '+hello};
}

function mapDispatch(dispatch) {

    const onRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const onAdd = (text) => {
        dispatch(addTodo(text));
    };

    return {onRemove, onAdd};
}


function logProps(WrappedComponent) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
        }
        render() {
            // Wraps the input component in a container, without mutating it. Good!
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default connect(mapState, mapDispatch)(logProps(TodoApp));