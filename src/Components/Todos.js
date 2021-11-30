
import {Button,Form} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { setTitle } from '../Actions';
import { setDes } from '../Actions';
import { setTodos } from '../Actions';
import { setChecked } from '../Actions';
import { setComplete } from '../Actions';
import { useState,useEffect } from 'react';



  export default function Todos() {
    const title=useSelector(state=>state.todoReducer.title)
    const completed=useSelector(state=>state.todoReducer.completed)
    const des=useSelector(state=>state.todoReducer.des)
    const todos=useSelector(state=>state.todoReducer.todos)
    const newtitle=useSelector(state=>state.updateReducer.newTitle)
    const checked=useSelector(state=>state.todoReducer.checked)
    const newdes=useSelector(state=>state.updateReducer.newDes)
    const dispatch=useDispatch();
    const [togglebtn,setTogglebtn]=useState(true)
    const [isEditItem,setIsEditItem]=useState(null);

    useEffect(() => {
     localStorage.setItem("data",JSON.stringify(todos))
    }, [todos])
  

  
      const addTodos=(e)=>{
        e.preventDefault();
        if(!title && !des){
          alert("title and discription can't be blank")
        }
     
        else if(title && des && !togglebtn){
          dispatch(setTodos(
            todos.map((elem)=>{
              if(elem.id===isEditItem){
                return {...elem, title:title,des:des}
              }
            })
          ))

          setTogglebtn(true);
          dispatch(setTitle(""))
          dispatch(setDes(""))
          setIsEditItem(null);


        }
        else{
  
       const mytodo={
            id:new Date().getTime().toString(),
            title:title,
            des:des,
            complete:completed

        }
        dispatch(setTodos([...todos,mytodo]))
        console.log(todos)
      }
      }

    const deleteTodos=(id)=>{
      dispatch(setTodos(todos.filter((ele)=>{
         return ele.id!==id
          
        })))
       
      }

      const UpdateTodo=(id)=>{
      const newUpdateItem=todos.find(item=>{
        return item.id===id;
      })


      console.log(newUpdateItem.title);
      setTogglebtn(false);
      dispatch(setTitle(newUpdateItem.title))
      dispatch(setDes(newUpdateItem.des))
      setIsEditItem(id);

       
    
       }

       const completeTodo=(id)=>{
       dispatch(setComplete(true))

       }
     

  return (
   <div>
     <Form>
       <div className="container my-3 ">
         <Form.Control 
           type="text"
           value={title}
           placeholder="title" 
           onChange={(e)=>dispatch(setTitle(e.target.value))}
         />
       </div>
       <div className="container my-3 ">
         <Form.Control 
           type="text" 
           value={des}
           placeholder="description" 
           onChange={(e)=>dispatch(setDes(e.target.value))}
         />
       </div>
       <div className="text-center">
        {togglebtn?
         <Button 
           variant="primary" 
           type="submit"
           onClick={addTodos}
          >
           add Todo
          </Button>:
           <Button 
           className="btn btn-sm" 
           variant="success"
           onClick={addTodos}
         >updateTodo</Button> 

         }
          <hr />
          <br />
          <h2>Todos Lists</h2>
          <hr />
          {todos.map(item=>(

             <>
             <div className="container"></div>
               <h3 key={item.id}>{item.title} </h3> 
               <p> {item.des}</p><br />
               <Button 
                 className="btn btn-sm my-2 " 
                 variant="danger"
                 onClick={()=>deleteTodos(item.id)}
               >
                 deleteTodo
               </Button> 
               <input type="checkbox" className="mx-3" onClick={()=>completeTodo(item.id)}  />
               <Button 
                 className="btn btn-sm" 
                 variant="success"
                 onClick={()=>UpdateTodo(item.id)}
               >updateTodo</Button> 
               <hr />
             </>
          ))}
        </div>
      </Form>
   
   </div>
  )
}
