import React, { useEffect, useState } from "react";
import { getAllTodos, deleteTodo,markComplete,markInComplete } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
    
    const [todos,setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useeffect......');
        listTodos();
    },[]);

    const listTodos = () => {
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    const addNewTodo = () => {
        navigate('/add-todo');
    }

    const updateTodo = (id) => {
        navigate(`/update-todo/${id}`);
    }

    const removeTodo = (id) => {
        deleteTodo(id).then((response) => {
            console.log(response);
            listTodos();
        }).catch((error) => {
            console.error(error);
        });
    }

    const markCompleteOrInComplete = (id,isMarkComplete) => {
        if(isMarkComplete){
            markComplete(id).then((response) => {
                listTodos();
            }).catch((error) => {
                console.error(error);
            });
        }else{
            markInComplete(id).then((response) => {
                listTodos();
            }).catch((error) => {
                console.error(error);
            });
        }
        
    }
    return(
        <div className='container'>
            <h2 className="text-center">List of Todos</h2>
            <button className="btn btn-primary mb-2" onClick={addNewTodo}>Add Todo</button>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => 
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES' : 'NO'}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateTodo(todo.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => removeTodo(todo.id)} style={{marginLeft: "10px"}}>Delete</button>
                                        <button className="btn btn-success" onClick={() => markCompleteOrInComplete(todo.id,true)} style={{marginLeft: "10px"}}>Complete</button>
                                        <button className="btn btn-info" onClick={() => markCompleteOrInComplete(todo.id,false)} style={{marginLeft: "10px"}}>In Complete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodoComponent