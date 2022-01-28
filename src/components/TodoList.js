import React from 'react'
import List from './List'
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faEdit } from '@fortawesome/free-regular-svg-icons';



// to get data from local storage

const getLsData = () => {
    let list = localStorage.getItem('myLocalItems');
    // console.log(list);
    if (list) {
        return JSON.parse(localStorage.getItem('myLocalItems'));
    } else {
        return [];
    }
}


const TodoList = () => {

    // states
    const [inputData, setInputData] = useState('');
    const [todoList, setTodoList] = useState(getLsData());
    const [editTodo, setEditTodo] = useState(null);
    const [isEditItem, setIsEditItem] = useState(null);
    const [editAdd, setEditAdd] = useState(true);



    // -------------------------Add task--------------------------
    const addTask = (e) => {
        e.preventDefault();
        if (!inputData) {
            toast.error('invalid input');
        } else if (inputData && !editAdd) {
            setTodoList(
                todoList.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, mytodo: inputData }
                    }
                    return elem;
                })
            )
            setEditAdd(true);
            setInputData('');
            setIsEditItem(null);
            toast('Task Updated')
        } else {
            const newTodo = {
                mytodo: inputData,
                id: new Date().getTime().toString()
            }
            setTodoList([...todoList, newTodo]);
            setInputData('');
            toast.success('Task Added')
        }
    };




    // --------------------delete All task-----------------------------
    const deleteAll = () => {
        setTodoList([]);

        toast.error('All Task Deleted')
    }


    // add task in loacal storage
    useEffect(() => {
        localStorage.setItem('myLocalItems', JSON.stringify(todoList))
    }, [todoList]);




    return (
        <>
            <div className="container">
                <div className="todo_box">
                    <h2>Todo List</h2>


                    <form onSubmit={addTask}>

                        <input type="text"
                            className="input"
                            placeholder="Enter a task here....."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            editAdd 
                            ? <button className="btn-11 btn-1"><FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                            : <button type='submit' className="btn-11 btn-1"><FontAwesomeIcon icon={faEdit} /></button>
                        }
                    </form>


                    {todoList.length >0 ? todoList.map((elem) =>
                        <List
                            mytodo={elem.mytodo} 
                            key={elem.id}
                            id={elem.id}
                            inputData={inputData}
                            setTodoList={setTodoList}
                            todoList={todoList}
                            editTodo={editTodo}
                            setEditTodo={setEditTodo}
                            setInputData={setInputData}
                            editAdd={editAdd}
                            setEditAdd={setEditAdd}
                            setIsEditItem={setIsEditItem}
                            isEditItem={isEditItem}

                        />)

                        : <h2> 🚫 No Data here...</h2>
                    }

                    {
                        todoList.length >0
                        ? <div className="show-delete">
                            <button className="btn-11 delete" onClick={deleteAll}>Delete All</button>
                            {/* <button className="btn  watch" >Watch List</button> */}
                          </div> 
                        : null
                    }
                </div>
            </div>

        </>
    )
}
export default TodoList
