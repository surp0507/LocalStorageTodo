import { SET_CHECKED, SET_COMPLETE, SET_TITLE } from "../constants";
import {SET_DES} from '../constants'
import {SET_TODOS} from '../constants'


const getLocalStorageItem=()=>{
  let data=localStorage.getItem('data')
  console.log(data)
  if(data){
   return JSON.parse(localStorage.getItem('data'));
  }
  else{
    return [];
  }
}

const initialState={
  todos:[getLocalStorageItem()],
  title:"",
  des:"",
  checked:0,
  completed:false
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
      case SET_COMPLETE:return{
        ...state,
        completed:action.complete
      }

    default:return state;
  }
}