import React from 'react'
import {MdDeleteSweep} from 'react-icons/md';

const Taskitem = ({task, deleteTask}) => {
return (
<li className="items">
    <div className="items-text">
        <input type='checkbox' />
        <p>{task.taskName}</p>
    </div>
    <MdDeleteSweep className="delete-icon" 
    onClick={() =>deleteTask(task.taskName)}/>
</li>
);

}

export default Taskitem