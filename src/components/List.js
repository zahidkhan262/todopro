import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";



const List = ({mytodo,setEditAdd,setInputData,setIsEditItem,todoList,id,setTodoList}) => {


    const editTask = (id) => {
        let newEditItem = todoList.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem)

        setEditAdd(false);
        setInputData(newEditItem.mytodo);
        setIsEditItem(id);
    }

    //Delete Todo by filter method via id
    const deleteTask = (index) => {

        const updatedItems = todoList.filter((item) => {
            return index !== item.id;
        })
        toast.error('Task Deleted')
        setTodoList(updatedItems);
    }


    return (
        <>
            <div className="list d-flex">
                <p>{mytodo}</p>
                <button className="btn btn-3" onClick={() => editTask(id)}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="btn btn-2" onClick={() => deleteTask(id)} ><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </>
    )
}

export default List
