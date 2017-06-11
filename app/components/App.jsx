import React from 'react';
//import {connect} from 'react-redux';
import Title from './Title';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
//import {addTodo, removeTodo} from  '../actions'

class TodoApp extends React.Component {

    render() {
        // const {todos, onRemove, onAdd} = this.props;
        // return (
        //     <div>
        //         <Title todos={todos} />
        //         <TodoForm onSubmit={onAdd}/>
        //         <TodoList todos={todos} remove={onRemove}/>
        //     </div>
        // );
        return (
            <div>
                <Title />
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAdd: (text) => {
//             dispatch(addTodo(text));
//         },
//         onRemove: (id) => {
//             dispatch(removeTodo(id));
//         }
//     }
// }

export default TodoApp;