import React from "react";
import {connect} from 'react-redux';
import { AddProduct } from "./Redux/Actions";
function App(props){
  
  return(
    <dvi>
      <h1>React Reduc Practice Code</h1>
      <h2>All Products : {props.products}</h2>
      <button onClick={()=>props.Add_Product("Afzaal")}>Add Products</button>
      <button onClick={()=>props.setAge(60)}>Set Age</button>
    </dvi>
  )
}

const mapStateToProps=(state)=>{
  return {
    products:state.Products
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    Add_Product:(data)=>{
      dispatch(AddProduct(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);