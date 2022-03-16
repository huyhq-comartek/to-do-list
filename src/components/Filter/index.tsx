import React, { memo } from 'react';
import './filter.css'

interface Props {
    all: () => void,
    completed: () => void,
    unCompleted: () => void,
    isActive: string
}

function Filter({
    all, 
    completed, 
    unCompleted, 
    isActive
}: Props) {

    return (
        <div className="filter">
            <button 
                className={isActive === 'all' ? 'active' : ''}
                onClick={all}
            >All</button>
            <button 
                className={isActive === 'completed' ? 'active' : ''}
                onClick={completed}
            >Completed</button>
            <button 
                className={isActive === 'uncompleted' ? 'active' : ''}
                onClick={unCompleted}
            >Uncompleted</button>
        </div>
    )
}

export default memo(Filter);