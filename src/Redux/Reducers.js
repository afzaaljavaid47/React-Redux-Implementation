import { Add_Product, Show_Products } from "./Types"

const initialState={
    Products:"Afzaal Javaid"
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Add_Product:return {
            ...state,
            Products:action.payload
        };
        case Show_Products:return state;
        default:
            return state;
    }
}