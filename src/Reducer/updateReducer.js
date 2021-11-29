import { NEW_TITLE } from "../constants";
import { NEW_DES } from "../constants";

const initialState={
  newTitle:"",
  newDes:""
}

const updateReducer=(state = initialState,action)=>{
  switch(action.type){
    case NEW_TITLE:return{
      ...state,
      newTitle:action.newtitle

      }
    case NEW_DES:return{
      ...state,
      newDes:action.newdes   
    }
    default:return state;
  }    
}
export default updateReducer;