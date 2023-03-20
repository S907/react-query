import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Ajax() {
    const[error, setError]=useState(null);
    const[isLoaded, setIsLoaded]=useState(1)
    const[items, setItem]= useState([]);

console.log(isLoaded);
    let jsonData = axios.get('http://localhost:3000/data').then((res)=>{
        let gData = res.data;
        console.log('gata',gData);
        return gData;
    })
    
    // console.log('kol',jsonData);
    useEffect(()=>{
      
    })


  return (
    <>
    
    </>
  )
}

export default Ajax