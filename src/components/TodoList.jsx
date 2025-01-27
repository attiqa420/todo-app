import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function TodoList ({key, data, onHandleDelete}) {

  return (
    <>
       <li key={key} className="todo-item"> 
                            <span>
                                {data}
                                <button
                                    className="btn btn-secondary todo-btn todo-btn-delete"
                                    style={{ backgroundColor: '#133808', color: 'white' }}
                                    onClick={() => onHandleDelete(data)}
                                >
                                    <RiDeleteBin6Fill />
                                </button> 
                            
                            </span>
                        </li>
    </>
  )
}

export default TodoList
