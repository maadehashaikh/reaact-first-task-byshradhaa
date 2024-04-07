import React from 'react'

function Price_comp({oldPrice,newPrice}) {
  let oldstyles = {
    textDecorationLine:'line-through',
  };
  let newstyle = {
    fontWeight:'bold',
  }
  let styles = {
    backgroundColor:'#e0c367',
    height:'20px',
    borderBottomLeftRadius : "10px",
    borderBottomRightRadius : "14px",
    display:'flex',
    alignItem:'center',
    justifyContent:"center",
  }
  return (
    <div style={styles}>
      <span style={oldstyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newstyle}>{newPrice}</span>
    </div>
  )
}
export default Price_comp
