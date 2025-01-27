import React, { useState } from 'react';
import '../Todo.css';  // Import the CSS file
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const todoKey = "localKey";

function Todo() {

   
    const[Task, setTask] = useState(() => {

      const localTodo = localStorage.getItem(todoKey);
      if(!localTodo) return [];

      return JSON.parse(localTodo);
    });

    
    const handleForm = (inputValue) =>{
       

        if(!inputValue) return;

        if(Task.includes(inputValue)) return ;
        
        setTask((prevTask) => [...prevTask, inputValue]);
        
    };

     // delete button function
     const handleDelete = (value) => {
        const updatedTask = Task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    //clear All btn functiion
    const handleClearbtn = () => {
        setTask([]);
    };

    //Adding todo data in local storage

    localStorage.setItem(todoKey, JSON.stringify(Task));

  return (
    <>
      <section className="todo-section">
        <header className="todo-header">
            <h1>Todo List</h1>
        </header>

       <TodoForm AddTodo={handleForm} />

       <section> 
          <ul>
              {
                Task.map( (curTask, index) => {
                    return (
                       <TodoList
                        key={index}
                        data={curTask} 
                        onHandleDelete={handleDelete}
                        />
                    );
                })
              }
          </ul>
        </section>

        <button className='clear-btn' onClick={handleClearbtn}>Clear All</button>
        
      </section>
    </>
  );
}

export default Todo;
