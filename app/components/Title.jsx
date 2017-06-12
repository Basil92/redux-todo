import React from 'react';
import {connect} from 'react-redux';
const Title = ({todos, process}) => {
    return (
        <div>
            <h1>to-do ({todos.length}). Async adding in process - {process.toString()}</h1>
        </div>
    );
}
const mapStateToProps = (state) =>
    ({
        todos: state.todos,
        process: state.process
    });

export default connect(mapStateToProps)(Title);

