import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8080/api/todos/";

export const getAllTodos = () => axios.get(`${BASE_REST_API_URL}get/all`);
export const saveTodo = (todo) => axios.post(`${BASE_REST_API_URL}save`,todo);
export const getTodo = (id) => axios.get(`${BASE_REST_API_URL}get/${id}`);
export const updateTodo = (id,todo) => axios.put(`${BASE_REST_API_URL}update/${id}`,todo);
export const deleteTodo = (id) => axios.delete(`${BASE_REST_API_URL}delete/${id}`)
export const markComplete = (id) => axios.patch(`${BASE_REST_API_URL}markComplete/${id}`); 
export const markInComplete = (id) => axios.patch(`${BASE_REST_API_URL}markInComplete/${id}`);
