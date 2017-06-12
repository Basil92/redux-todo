import React from 'react';
import Title from './Title';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

export default TodoApp;