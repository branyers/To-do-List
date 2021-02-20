import React from 'react'

const TodoItems = ({taskList, deleteOnChange, UpdateCheckbox}) => {
    const {_id,task,student,isCompleted} = taskList
   console.log(taskList)
   console.log(_id)
    return (
        <div>
        <input type="checkbox" defaultChecked={isCompleted} onChange={(e)=>UpdateCheckbox(taskList,e)}/>


            <span>{task} - {student}</span>
            {""}<span>{isCompleted}</span>{""}
            <button onClick={()=>deleteOnChange(_id)}>Eliminar</button>
            
        </div>
    )
}

export default TodoItems
