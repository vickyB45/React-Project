                    // DAY 4 DEC CLASS CHAPTER ==== USESTATE WITH SANJAY SIR

/* import React from "react"
import Menu from "./componant/St";
const App=()=>{
    return(
    <>
    <Menu/>
    </>
    );
}

export default App */





                                    // API CALL TO SERVER ==== BY VICKY

/* import React,{ useState,useEffect } from "react";
import { GetData } from "./componant/fetch";
import { Post } from "./componant/post";
import "./App.css"

function App(){

    const[data,setData]=useState(null);

    useEffect(()=>{
        GetData().then((post)=>setData(post))
    },[])



return(
    <>
    <div className="container">
        {
            data? data.map((e)=>{
                return <Post id={e.id} title={e.title} body={e.body}/>
            }):<p className="loader">loading...</p>
        }
    </div>
    </>
)
}
export default App; */



                            // FORM SUBMIT WITH USEING useState METHOS
 
//   import React,{useState} from 'react'
  
//   const App = () => {

//     const[userData, setUserData]= useState()
//     const[userPassword, setUserPassword]= useState()

//    const handleSubmit =(e)=>{
//     e.preventDefault();
//     // console.log("Login details:", {userData,userPassword})
//     document.querySelector('.para').innerHTML = `User Details:<br> Name= ${userData} ,<br> Password= ${userPassword}`
//    }



//     return (
//           <div>
//             <form onSubmit={handleSubmit}>
//             <input type='text' placeholder='Enter your name' value={userData} onChange={(e)=>setUserData(e.target.value)}/><br/><br/>
//             <input type='password' placeholder='Enter your password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/><br/><br/>
//             <button type='submit'>Login</button>
//             <button variant="contained">Contained</button>
//             </form>
//             <p className='para'></p>
//           </div>
//     )
//   }

//   export default App


                                            //useState with remove and update value

import React,{useState} from "react";
import "./App.css"


const App = ()=>{
    const [color,setColor]=useState('black')
    return(
        <div className="container" style={{backgroundColor:color}}>
            <div className="fixed">
                <div className="button-container">
                    <button onClick={()=>setColor('red')} style={{background:"red"}}>Red</button>
                    <button onClick={()=>setColor('green')} style={{background:"green"}}>Green</button>
                    <button onClick={()=>setColor('blue')} style={{background:"blue"}}>Blue</button>
                    <button onClick={()=>setColor('goldenrod')} style={{background:"goldenrod"}}>Goldenrod</button>
                    <button onClick={()=>setColor('pink')} style={{background:"pink"}}>Pink</button>
                    <button onClick={()=>setColor('purple')} style={{background:"purple"}}>Purple</button>
                    <button onClick={()=>setColor('orange')} style={{background:"orange"}}>Orange</button>
                    <button onClick={()=>setColor('aqua')} style={{background:"aqua"}}>Aqua</button>
                    <button onClick={()=>setColor('white')} style={{background:"white"}}>White</button>
                    <button onClick={()=>setColor('brown')} style={{background:"brown"}}>Brown</button>
                    <button onClick={()=>setColor('cadetblue')} style={{background:"cadetblue"}}>Cadetblue</button>
                    <button onClick={()=>setColor('coral')} style={{background:"coral"}}>Coral</button>
                    <button onClick={()=>setColor('fuchsia')} style={{background:"fuchsia"}}>Fuchsia</button>
                </div>
            </div>
        </div>
    )
}
export default App;