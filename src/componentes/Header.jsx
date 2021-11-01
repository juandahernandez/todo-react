import React from 'react'

const Header = ({setIsSelectedAll, setIsCompletTask, setIsIncompletTask}) => {

    const getAlltasks= () => {
        setIsSelectedAll(true)
        setIsCompletTask(false)
        setIsIncompletTask(false)
    }
    const getAllTaskCompleted = () => {
        setIsSelectedAll(false)
        setIsIncompletTask(false)
        setIsCompletTask(true)
    }
    const getAllTaskIncompled = () => {
        setIsSelectedAll(false)
        setIsCompletTask(false)
        setIsIncompletTask(true)
    }
    return (
        <header>
            <div className="title-header">
                <h1>Todo List</h1>
            </div>
            <div className="header-button">
                <button className="button" onClick={getAlltasks}>All tasks</button>
                <button className="button" onClick={getAllTaskCompleted}>Complete tasks </button>
                <button className="button" onClick={getAllTaskIncompled}>Incompleted task</button>
            </div>

        </header>
    )
}

export default Header
