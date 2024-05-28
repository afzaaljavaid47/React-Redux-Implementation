import {Add_Product,Show_Products} from './Types';

export const AddProduct=(data)=>{
    return {
        type:Add_Product,
        payload:data
    }
}

export const ShowProducts=()=>{
    return {
        type:Show_Products
    }
}