import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h2 className="TodoCounter">You have completed {completed} of {total} ToDo</h2>
    );
}

export { TodoCounter };