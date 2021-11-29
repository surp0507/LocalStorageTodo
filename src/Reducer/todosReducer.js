import { SET_CHECKED, SET_TITLE } from "../constants";
import {SET_DES} from '../constants'
import {SET_TODOS} from '../constants'

const initialState={
  todos:[  {
    id:1,   
    title:"javascript",
    des:"this is javascript"
   },
   {
   id:2,   
   title:"java",
   des:"this is java"
   },
   {
   id:3,   
   title:"HTML",
   des:"this is HTML"
   }],
  title:"",
  des:"",
  checked:0
}

export const todoReducer=(state=initialState,action)=>{
  switch(action.type){
    case SET_TITLE:return{
      ...state,
      title:action.title
    }
    case SET_DES:return{
        ...state,
        des:action.des
      }
      case SET_TODOS:return{
        ...state,
        todos:action.todos
      }
      case SET_CHECKED:return{
        ...state,
        checked:action.checked
      }
    default:return state;
  }
}