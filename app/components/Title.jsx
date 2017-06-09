import React from 'react';
const Title = ({todos}) => {
    return (
        <div>
            <h1>to-do ({todos.length})</h1>
        </div>
    );
}
export default Title;

