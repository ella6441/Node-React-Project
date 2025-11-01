//  import React from 'react'; 
// import { useState } from 'react';
// import { Button } from 'primereact/button';
// import { Password } from 'primereact/password';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { InputText } from 'primereact/inputtext';
// import { FloatLabel } from "primereact/floatlabel";


// //להוסיף לlocalstorage
// //לבדוק איך לעשות עם הטעויות כשהמשתמש לא קיים

// const Login = () => {

//   const [username,setUsername]=useState("")
//   const [name,setName]=useState("")
//   const [password,setPassword]=useState("")
//   const navigate= useNavigate()
    
//     const submitForm=async (e)=>{
//       if(!username || !name || !password){
//         alert("All the fields are required")
//         return
//       }
//       e.preventDefault()
//       console.log("username:", username)
//       console.log("name:", name)
//       console.log("password:", password)
//       try{
//         const res=await Axios.post("http://localhost:44444/api/user/login",{username,name,password})
//         if(res.status===200){
//             //להוסיף לlocalstorage
//           localStorage.setItem("userToken", res.data.accessToken)
//           const userToken = localStorage.getItem("userToken")
//           console.log(userToken)
//           navigate("/")
//         }
//       }
//       catch(e){
//         alert(e)
//       console.log(e);
//       }
     
//     }
    
//   return (
//    <> <div>Login</div>
   
//      <form onSubmit={submitForm}>    

//           <div className="card flex justify-content-center">
//             <FloatLabel>
//               <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
//               <label htmlFor="username">Username</label>
//             </FloatLabel>
//         </div>

//           <div className="card flex justify-content-center">
//             <FloatLabel>
//               <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
//               <label htmlFor="Name">Name</label>
//             </FloatLabel>
//         </div>

//           <div className="card flex justify-content-center">
//             <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask required/>
//           </div>

//           <div className="card flex justify-content-center">
//                 <Button label="Submit" type='submit'/>
//             </div>
//         </form></>
//   )
// }

// export default Login




import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import Axios from "axios";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Divider } from 'primereact/divider';
import { Toast } from 'primereact/toast';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPssword] = useState('');
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const toastTopRight = useRef(null);
    const navigate = useNavigate()

    const showMessage = (event, ref, severity) => {
        let massege = '';
        if (event === 406)
            massege = "שם משתמש אינו קיים במערכת"
        if (event === 405)
            massege = "עליך למלא את כל השדות"
        if (event === 476)
            massege = "הסיסמא שהוזנה שגויה"
        const title = "אופפפס"
        ref.current.show({ severity: 'info', summary: title, detail: massege, life: 3000 });
    };

    const submitForm = async (e) => {
        e.preventDefault()
        // // if(!userName || !name || !password){
        //     alert("All the fields are required")
        //     return
        // } 
        try {
            // const res = await Axios.post("http://localhost:1234/api/users/one", { username: userName, password, name })
                    const res=await Axios.post("http://localhost:44444/api/user/login",{username:userName,name,password})

            if (res.status === 200) {
                localStorage.setItem("userToken", res.data.accessToken)
                navigate("/all/product")
            }
        } catch (e) {
            showMessage(e.status, toastTopRight, '#b7c4ca')
        }
    }

    return (
        <>
            <Toast ref={toastTopRight} position="top-right" />
            <div className="login" style={{ height: "90vh", display: "flex", justifyContent: "end", alignItems: "center", padding: "10%" }}>
                <div className="card" style={{ border: "3px solid #cdb69eff ", display: "flex", justifyContent: "center", alignItems: "center", width: "30%", backgroundColor: "#fbf4ec  " }}>
                    {/* <div className="flex flex-column md:flex-row"> */}
                    <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label style={{ color: "#af9982ff" }} className="w-6rem">Username</label>
                            <InputText style={{ backgroundColor: "#e7cfb5ff", boxShadow: "2px 2px 10px #e7cfb5ff" }} id="username" type="text" className="w-12rem" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label style={{ color: "#af9982ff" }} className="w-6rem">Name</label>
                            <InputText style={{ backgroundColor: "#e7cfb5ff", boxShadow: "2px 2px 10px #e7cfb5ff" }} id="name" type="text" className="w-12rem" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label style={{ color: "#af9982ff" }} className="w-6rem">Password</label>
                            <InputText style={{ backgroundColor: "#e7cfb5ff", boxShadow: "2px 2px 10px #e7cfb5ff" }} id="password" type="password" className="w-12rem" onChange={(e) => setPssword(e.target.value)} />
                        </div>
                        <Button label="Login" className="w-10rem mx-auto" style={{ backgroundColor: "#cdb69eff", color: "#af9982ff" }} onClick={(e) => { submitForm(e) }}></Button>
                    </div>
                </div>    </div>
        </>

    )
}

export default Login

