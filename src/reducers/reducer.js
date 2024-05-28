const initialStates={
    name:"Afzaal Javaid",
    age:24,
    education:"BSCS"
}

const reducer=(state=initialStates,action)=>{
    if(action.type==="CHNAGE_NAME"){
        return {
            ...state,
            name:action.payload
        }
    }
    else if(action.type==="CHANGE_AGE")
    {
        return{
            ...state,
            age:action.payload
        }
    }
    return state;
}

export default reducer;