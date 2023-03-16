import React from 'react'

const Content1 = () => {
    const handleNameChange = ()=>{
        const names = ['Bob', 'Kevin', 'Dylan'];
        const int = Math.floor(Math.random()*3);
        console.log(names[int]);
        return names[int]
    }
    const handleClick = ()=>{
        console.log('You clicked it !!!');
    }
    const handleClick2 = (name)=>{
        console.log(`${name} has Clicked`);
    }
    const handleClick3 = (name)=>{
        console.log(`${name} has Clicked`);
    }
  return (
    <>
    <div>Hello : {handleNameChange()} </div>
   <button onClick={handleClick}>Click It</button>
   <button onClick={()=> handleClick2('Souvik')}>Name Clicker</button>
    </>
  )
}

export default Content1