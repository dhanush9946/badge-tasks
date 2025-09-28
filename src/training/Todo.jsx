import React, { useState } from 'react'

function Todo() {
  const [input,setInput]=useState('');
  const [todos,setTodos]=useState([]);
  const [editingIndex,setEditingIndex]=useState(null);
  const [editingText,setEditingText]=useState('');

  const handleEdit = (index)=>{
    setEditingIndex(index);
    setEditingText(todos[index]);
  }
  const handleSave = (index)=>{
    const updated = todos.map((todo,i)=>(
      i===index? editingText:todo
    ));
    setTodos(updated);
    setEditingIndex(null);
    setEditingText('');
  }
  const handleCancel = ()=>{
    setEditingIndex(null);
    setEditingText('');
  }

  const handleAdd = (e)=>{
    e.preventDefault();
    if(!input.trim()) return;

    setTodos([...todos,input]);

    setInput('');
    
  }
  const handleDelete = (index)=>{
    const updated = todos.filter((_,i)=>( i != index));
    setTodos(updated)
  }

  return (
    <div>
      <label>Enter todo:</label>
      <input 
      type="text" 
      placeholder='enter todo'
      value={input}
      onChange={(e)=>setInput(e.target.value)}

      />
      <button onClick={handleAdd}>Add</button>
      <br />
      <br />
       <div>
        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>
              {editingIndex === index? (
                <>
                <input 
                type="text"
                value={editingText}
                onChange={(e)=>setEditingText(e.target.value)}
                 />
                 <button onClick={handleCancel}>cancel</button>
                 <button onClick={()=>handleSave(index)}>save</button>
                </>
              ):(
                <>
              {todo} { }
            <button onClick={()=>handleEdit(index)}>edit</button>
            <button onClick={()=>handleDelete(index)}>delete</button>
             </> )}
            </li>
          ))}
        </ul>
       </div>
    </div>
  )
}

export default Todo