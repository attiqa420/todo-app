import React, { useState } from 'react';
import '../Todo.css';  // Import the CSS file

function TodoForm ({AddTodo}) {

     const [inputValue, setInputValue] = useState("");

   
    const handleChange = (e) => {
        setInputValue(e.target.value);
       
    };

    const handleForm = (event) => {

        event.preventDefault();
        AddTodo(inputValue);
        setInputValue("");
    };

  return (
    <>
        <section>
                   <form onSubmit={handleForm}>
                       <div className="input-group mb-3">
                           <input 
                               type="text" 
                               className="form-control"  
                               placeholder='Enter Your Task' 
                               value={inputValue} 
                               onChange={handleChange}
                           />
                           <div className="input-group-prepend" >
                               <span className="input-group-text"  style={{ backgroundColor: '#133808', color: 'white' }}>
                                   <button type='submit' className='form-btn' style={{ backgroundColor: '#133808', color: 'white' }}>
                                       Add Task
                                   </button>
                               </span>
                           </div>
                       </div>
                   </form>
               </section>
    </>
  )
}

export default TodoForm
