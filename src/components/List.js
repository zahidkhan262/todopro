import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



const List = (props) => {


    const editTask = (id) => {
        let newEditItem = props.todoList.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem)

        props.setEditAdd(false);
        props.setInputData(newEditItem.mytodo);
        props.setIsEditItem(id);
    }


    return (
        <>
            <div className="list d-flex">
                <p>{props.mytodo}</p>
                <button className="btn btn-3" onClick={() => editTask(props.id)}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="btn btn-2" onClick={() => props.deleteTask(props.id)} ><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </>
    )
}

export default List
