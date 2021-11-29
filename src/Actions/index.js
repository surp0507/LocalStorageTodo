import * as types from '../constants/index'

export const setTitle=(title)=>{
    return{
        type:types.SET_TITLE,
        title
    }
}

export const setDes=(des)=>{
    return{
        type:types.SET_DES,
        des
    }
}

export const setTodos=(todos)=>{
    return{
        type:types.SET_TODOS,
        todos
    }
}

export const setNewTitle=(newtitle)=>{
    return{
        type:types.NEW_TITLE,
        newtitle
    }
}


export const setNewDes=(newdes)=>{
    return{
        type:types.NEW_DES,
        newdes
    }
}

export const setChecked=(checked)=>{
    return{
        type:types.SET_CHECKED,
        checked
    }
}

// export const updateTitle=(updatetitle)=>{
//     return{
//       type:types.SET_NEWTITLE,
//       updatetitle    
//     }
// }


// export const updateDes=(updatedes)=>{
//     return{
//       type:types.SET_NEWDES,
//       updatedes
//     }
// }

