import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
const Header = () => {
  const[isLoading, setIsLoading] =useState(true);
  const[data, setData]= useState([])

  const fetchData = useCallback(async () => {
    let data = await axios.get('http://localhost:3000/data')
    console.log('json', data);
    const getData = data?.data
    console.log('getData', getData)

    setData(getData)

  },[])
  
  useEffect(() => {

  
    fetchData().catch(console.error)
    // return () => {
      
    // }
  },[fetchData])

  console.log('ter',data);
  if(!isLoading){
    setIsLoading(false)
  }

  
  return (
    <>
    <h1>Student List</h1>

    <div className="container-fluid">
    {
      data.map((jsonData)=>{
        return <>
        <div key={jsonData.category}>Category:{jsonData.client_name}</div>
        </>
      })
    }

    </div>

    
    </>
  )
}

export default Header