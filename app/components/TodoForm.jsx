import React from 'react';
import {connect} from 'react-redux';
import {addTodoAsync} from '../actions/index';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.value);
        this.setState({value:""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => (
            dispatch(addTodoAsync(text))
        )
    }
}

export default connect(null, mapDispatchToProps)(TodoForm);