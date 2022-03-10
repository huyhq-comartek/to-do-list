import { useState } from 'react';
import './filter.css'

function Filter({getBtn}) {
    // set State
    const [isActive, setActive] = useState('all');

    const changeStatus1 = () => {
        setActive(() => {
            getBtn('all');
            return 'all';
        });
    }

    const changeStatus2 = () => {
        setActive(() => {
            getBtn('completed');
            return 'completed';
        });
    }

    const changeStatus3 = () => {
        setActive(() => {
            getBtn('uncompleted');
            return 'uncompleted';
        });
    }

    return (
        <div className="filter">
            <button 
                className={isActive === 'all' ? 'active' : ''}
                onClick={changeStatus1}
            >All</button>
            <button 
                className={isActive === 'completed' ? 'active' : ''}
                onClick={changeStatus2}
            >Completed</button>
            <button 
                className={isActive === 'uncompleted' ? 'active' : ''}
                onClick={changeStatus3}
            >Uncompleted</button>
        </div>
    )
}

export default Filter;