
import { useForm } from "react-hook-form"
import { createTodo } from "../Services/API";



const CreateTodo = ({ getTask }) => {

    const { handleSubmit, register, errors } = useForm()

    const onSubmit = async (data) => {
        await createTodo(data)
        getTask()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input
                type="text"
                name="student"
                ref={register({ required: true })}
                placeholder="Escribe el nombre del estudiante"
            />
            {errors.student && <p style={{ color: 'red' }}>Este campo es requerido</p>}

            <input
                type="text"
                name="task"
                ref={register({ required: true })}
                placeholder="Escribe el nombre de la tarea"
            />
            {errors.task && <p style={{ color: 'red' }}>Este campo es requerido</p>}


            <button>Enviar datos</button>
        </form>
    )

}

export default CreateTodo
