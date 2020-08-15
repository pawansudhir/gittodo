import React from 'react';

const Todo = ({todos,handleclick}) => {
    const todolist = todos.length ? (
    todos.map(todo => {
        return(
            <div className = "collection-item" key = {todo.id}>
            <span onClick = {() => {handleclick(todo.id)}} > {todo.content}</span>
            </div>
        )
    })
    ):(
        <p className = "center"> You have no todos left</p>
    )
    return(
        <div className = "todos collection" >
             {todolist}             
        </div>
    )
}
export default Todo ; 