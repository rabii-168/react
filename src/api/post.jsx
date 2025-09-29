import React,{useState} from 'react';
const Fetch = () =>{
    const [data,setData]=useState([])
    const baseurl="https://jsonplaceholder.typicode.com/todos";
    const fetchurl=()=>{
        fetch(baseurl,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify({title:"New",Id:501,userId:201})
        })
        .then((response)=>response.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    }
    return(
        <div>
            <h1>API</h1>
            <button onClick={fetchurl}>Fetch</button>
            {/* {data.map((item)=>(
                <div key={item.id}>
                <h3>{item.title}</h3>
                <p>User ID: {item.userID}</p>
                </div>
            ))} */}
            <h1>{data.userId}</h1>
        </div>
    )
}

export default Fetch;