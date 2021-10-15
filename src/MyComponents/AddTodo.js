//import React from 'react';
import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
      e.preventDefault();  // By this line our page will not reload----Here "e" is an event
      if(!title || !desc){
        alert("Title and Description is required and cannot be blank")
      }
      else{
      addTodo(title, desc) 
      setTitle("");
      setDesc("");
      }
  }
  return (
    <div className="container my-3">
      <h3>Add a TODO</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">Todo-Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} class="form-control" id="desc"/>
        </div>
        <button type="submit" class="btn btn-sm btn-success">Add TODO</button>
      </form>
    </div>
  )
}
                                                                                                                                                                                                                                                                                    