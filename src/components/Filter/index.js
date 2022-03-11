import './filter.css'

function Filter({all, completed, uncompleted, isActive}) {

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
                onClick={uncompleted}
            >Uncompleted</button>
        </div>
    )
}

export default Filter;