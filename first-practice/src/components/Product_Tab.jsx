import React from 'react'
import Product from './Product'

const Product_Tab = () => {
  let styles = {
    display :"flex",
    flexwrap :"wrap",
    justifyContent:"center",
    alignItems:"center",
  }
  let heading = {
    display : 'flex',
    justifyContent:"center",
    alignItems:"center",
  }
  let line = {color:'black', fontSize:'12px'}
  return (
    <>
    <h1 style={heading}>Block Buster Deals | Shop Now </h1>
    <hr style={line}/>
    <div style={styles}>
      <Product title="Skin Care"  indx={0} />
      <Product title="MakeUp"  indx={1}/>
      <Product title="Clothing" indx={2}/>
      <Product title="Fragrances" indx={3}/> 
    </div>
    </>
  )
}

export default Product_Tab
