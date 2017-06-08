import AddTodoForm from '../components/TodoForm2'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo