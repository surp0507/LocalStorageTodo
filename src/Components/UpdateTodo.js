import React from 'react'
import {Button} from 'react-bootstrap'
import { setNewTitle } from '../Actions'
import { setTitle,setDes } from '../Actions'
import { setNewDes } from '../Actions'
import { useSelector,useDispatch } from 'react-redux'
import { setTodos } from '../Actions'

import { useParams } from 'react-router'
export default function UpdateTodo() {
    const updtitle=useSelector(state=>state.updateReducer.newTitle)
    const upddes=useSelector(state=>state.updateReducer.newDes) 
    const todos=useSelector(state=>state.todoReducer.todos)
    const dispatch=useDispatch();
    const {todoid}=useParams()
    console.log(todoid)
    
    
    const updateTodo=(id)=>{

     todos.map(ele=>{
         if(ele.id===id){
             dispatch(setTodos([...todos,{title:updtitle,des:upddes}]))
         }
       
     })
        console.log(todos)

    }
 
    return (

      <div>
        <h2 className="text-center">update Todos</h2>
        <hr />
      <input 
        className="mx-1"
        value={updtitle}  
        type="text" 
        onChange={(e)=>dispatch(setNewTitle(e.target.value))}

     />
     <input 
       className="mx-1"
       type="text" 
       value={upddes}
       onChange={(e)=>dispatch(setNewDes(e.target.value))}
     />
    
     <Button className="btn btn-sm mx-2 " onClick={()=>updateTodo(todoid)}>update</Button>
       
        </div>
    )
}
