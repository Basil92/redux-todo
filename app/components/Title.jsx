import React from 'react';
import {connect} from 'react-redux';
const Title = ({todos}) => {
    return (
        <div>
            <h1>to-do ({todos.length})</h1>
        </div>
    );
}
const mapStateToProps = (state) =>
    ({
        todos: state.todos
    });

export default connect(mapStateToProps)(Title);

