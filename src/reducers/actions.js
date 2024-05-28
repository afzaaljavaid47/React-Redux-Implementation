export const changeName=(name)=>{
        return {
            type:"CHNAGE_NAME",
            payload:name
        }
}

export const changeAge=(age)=>{
    return {
        type:"CHANGE_AGE",
        payload:age
    }
}