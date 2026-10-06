import React from 'react'
const MyButton = () =>{
    alert('Button Clicked')
}
    const handleClick=()=>{
    return<button 
    style ={{height:"40px",width:"100px"}}
        onClick={handleClick}>
            Click Me
            </button>
};
const Event = () => {
  return (
    <div>
        <MyButton/>
    </div>
  )
}

export default Event
