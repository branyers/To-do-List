import { useEffect, useState } from 'react'
import { getTodo, deleteTodo,updateTodo } from "../Services/API"
import CreateTodo from "./CreateTodo"
import TodoItems from './TodoItems'
const TodoContainer = () => {

    const [task, setTask] = useState([])

    useEffect(() => {
        getTask()
    }, [])


    const getTask = () => {
        getTodo().then((response) => {
            console.log(response.data.todos)
            setTask(response.data.todos)
            return response.data.todos
        })

    }


    const deleteTask = async (id) => {
        await deleteTodo(id)
        getTask()
    }

    const UpdateCheckbox = async (todo, e) => {
        const { checked } = e.target
        await updateTodo(todo.id, { ...todo, isCompleted: checked })
        getTask()
    }

    return (
        <>
            <CreateTodo getTask={getTask} />
            {task && task.map(task => <TodoItems key={task._id} taskList={task} deleteOnChange={deleteTask} UpdateCheckbox={UpdateCheckbox} />)}
        </>


    );


}


export default TodoContainer
