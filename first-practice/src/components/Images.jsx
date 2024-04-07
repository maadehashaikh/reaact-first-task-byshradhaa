  import React from 'react'

  function Images({image}) {
    return (
      <img src={image} alt="" style={{ width: '40%' , height : '15vh', borderRadius:'70px',display:'inline' , marginLeft:'170px'}} />
    )
  }

  export default Images