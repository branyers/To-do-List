import React from 'react'

const TodoItems = ({taskList, deleteOnChange, UpdateCheckbox}) => {
    const {id,task,student,isCompleted} = taskList
   
    return (
        <div>
        <input type="checkbox" defaultChecked={isCompleted} onChange={(e)=>UpdateCheckbox(taskList,e)}/>


            <span>{task} - {student}</span>
            {""}<span>{isCompleted}</span>{""}
            <button onClick={()=>deleteOnChange(id)}>Eliminar</button>
            
        </div>
    )
}

export default TodoItems
