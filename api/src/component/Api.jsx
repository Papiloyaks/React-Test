import axios from 'axios'
import React, { useState } from 'react'

let endpoint1 = "https://jsonplaceholder.typicode.com/users"
let endpoint2 = "https://api.github.com/users"
const Api =()=> {
    const [users, setusers] = useState([])
    const [users2, setusers2] = useState([])
    const [user3, setuser3] = useState({})
    const [city, setcity] = useState("")
    
    let key = "67fe3dbd6f28d657f591dc7e70e1bc94"
    let endpoint3 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    const getData=()=>{
        axios.get(endpoint1)
        .then((response)=>{
            // console.log(response);
            setusers(response.data)
            console.log(users);
        })        .catch((err)=>{
            console.log(err);
        })
    }
    
    const getData2=()=>{
        axios.get(endpoint2)
        .then((response)=>{
            // console.log(response);
            setusers2(response.data)
            console.log(users);
        })

        .catch((err)=>{
            console.log(err);
        })
    }

    const getData3=()=>{
        axios.get(endpoint3)
        .then((response)=>{
            console.log(response.data);
            setuser3(response.data)
            console.log(user3);
            setcity("")
        })

        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
    {/* <button onClick={getData}>getData</button>   
    <button onClick={getData2}>getData2</button> */}
    <h1 id='app' className='text-center'>Weather App</h1>
    <input type="text" name='' id='place' placeholder='City Name' onChange={(e)=>setcity(e.target.value)} value={city}/>
    <button onClick={getData3}>Get weather</button>

    {
        users.map((item)=>(
            <div>
                <small>{item.id}</small> 
                <p><b>Name: </b>{item.name}</p>
                <address><b>address: </b>{item.address.street}; {item.address.city}</address>
                <p><b>phone: </b>{item.phone}</p>
                <p><b>Website: </b>{item.website}</p>
            </div>
        ))
    }
    {
        users2.map((item)=>(
            <div>
                <small>{item.id}</small>
                <p><b>Name:</b>{item.login}</p>
                <p><b>Image:</b> <br /> <img src={item.avatar_url} alt="" width={100} /></p>
            </div>
        ))
    }
    <h1>Name: {user3.name}</h1>
    <h3>Cod: {user3.cod}</h3>
    <h1>Visibility: {user3.visibility}</h1>
    <h1>Timezone: {user3.timezone}</h1>
    <h3>DT: {user3.dt}</h3>
        <h1>{user3.base}</h1>
    
    </>
  )
}

export default Api