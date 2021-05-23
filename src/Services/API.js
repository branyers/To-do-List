import axios from "axios"

const BaseURL = "https://todos-go.herokuapp.com/api"

export const
 getTodo    = async () => await axios.get(`${BaseURL}/todos`),
 createTodo = async data => await axios.post(`${BaseURL}/todo`,data),
 updateTodo = async (id,data) => await axios.put(`${BaseURL}/todo/${id}`,data),
 deleteTodo = async (id) => await axios.delete(`${BaseURL}/todo/${id}`)

