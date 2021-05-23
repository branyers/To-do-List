import axios from "axios"

const BaseURL = "https://todos-go.herokuapp.com/api"

export const
 getTodo    = async () => await axios.get(`${BaseURL}/todos`),
 createTodo = async data => await axios.post(`${BaseURL}/todos`,data),
 updateTodo = async (id,data) => await axios.put(`${BaseURL}/todos/${id}`,data),
 deleteTodo = async (id) => await axios.delete(`${BaseURL}/todos/${id}`)

