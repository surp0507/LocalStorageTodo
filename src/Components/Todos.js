
import {Button,Form} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { setTitle } from '../Actions';
import { setDes } from '../Actions';
import { setTodos } from '../Actions';
import { setNewTitle } from '../Actions';
import { setNewDes } from '../Actions';
import { Link } from 'react-router-dom';
import { setChecked } from '../Actions';


  export default function Todos() {
    const title=useSelector(state=>state.todoReducer.title)
    const des=useSelector(state=>state.todoReducer.des)
    const todos=useSelector(state=>state.todoReducer.todos)
    const newtitle=useSelector(state=>state.updateReducer.newTitle)
    const checked=useSelector(state=>state.todoReducer.checked)
    const newdes=useSelector(state=>state.updateReducer.newDes)
    const dispatch=useDispatch();
  

    const addTodos=(e)=>{
        e.preventDefault();
        let id;
        todos.length===0 ? id=0
             :
        id=todos[todos.length-1].id+1
       const mytodo={
            id:id,
            title:title,
            des:des

        }
        dispatch(setTodos([...todos,mytodo]))
      }

    const deleteTodos=(data)=>{
      dispatch(setTodos(todos.filter((ele)=>{
          return ele!==data
        })))
      }

      const UpdateTodo=(data)=>{
       dispatch(setNewTitle(data.title))
        dispatch(setNewDes(data.des))
    
       }
     

  return (
   <div>
     <Form>
       <div className="container my-3 ">
         <Form.Control 
           type="text"
           placeholder="title" 
           onChange={(e)=>dispatch(setTitle(e.target.value))}
         />
       </div>
       <div className="container my-3 ">
         <Form.Control 
           type="text" 
           placeholder="description" 
           onChange={(e)=>dispatch(setDes(e.target.value))}
         />
       </div>
       <div className="text-center">
         <Button 
           variant="primary" 
           type="submit"
           onClick={addTodos}
          >
           add Todo
          </Button> 
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
                 onClick={()=>deleteTodos(item)}
               >
                 deleteTodo
               </Button> 
               <input type="checkbox" className="mx-3"   />
               <Link to={`/update/${item.id}`}>
               <Button 
                 className="btn btn-sm" 
                 variant="success"
                 onClick={()=>UpdateTodo(item)}
               >updateTodo</Button> </Link>
               <hr />
             </>
          ))}
        </div>
      </Form>
   </div>
  )
}
