import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import { Modal } from 'react-bootstrap';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';



const List = ({ mytodo, editAdd, setEditAdd, inputData, setInputData, setIsEditItem, todoList, id, setTodoList }) => {


    const [show, setShow] = useState(false);

    // edit task by find method via Id
    const editTask = (id) => {
        handleShow()
      
        let newEditItem = todoList.find((elem) => {
            return elem.id === id
        });
      

      
        setInputData(newEditItem.mytodo);
        // pass id in isEditItem via setIsEditItem
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
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="list d-flex">
                <p>{mytodo}</p>
                <button className="btn-11 btn-3" onClick={() => editTask(id)}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="btn-11 btn-2" onClick={() => deleteTask(id)} ><FontAwesomeIcon icon={faTrash} /></button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <input type="text"
                        className="input"
                        placeholder="Enter a task here....."
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                   
                    <button className="btn-11 btn-3" onClick={() => editTask(id)}><FontAwesomeIcon icon={faEdit} /></button>
                   
                </Modal.Body>
            </Modal>
        </>
    )
}

export default List
