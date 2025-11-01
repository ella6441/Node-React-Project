// import React, { useState } from 'react'; 
// import { InputMask } from "primereact/inputmask";
// import { AutoComplete } from 'primereact/autocomplete';
// // import { Form } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Password } from 'primereact/password';
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { InputText } from 'primereact/inputtext';
// import { FloatLabel } from "primereact/floatlabel";

// //username,password,name,email,phone
// const Register = () => {

//   const [username,setUsername]=useState("")
//   const [name,setName]=useState("")
//   const [password,setPassword]=useState("")
//   const [phone,setPhone]=useState("")
//   const [email,setEmail]=useState("")
//   const navigate= useNavigate()
  
  
//   const submitForm=async (e)=>{
//     if(!username || !name || !password){
//       alert("Username, name and password are required")
//       return
//     }
//     e.preventDefault()
//     console.log("username:", username)
//     console.log("name:", name)
//     console.log("password:", password)
//     console.log("phone:", phone)
//     console.log("email:", email)
//     const {data}=await Axios.post("http://localhost:44444/api/user/re",{username,password,name,email,phone})
//     console.log(data)
//     alert("ברוך הבא!! עכשיו עליך להיכנס לעמוד כניסה")
//     navigate("/all/login")

//   }

//   return (
//     <> <div>Register</div>
//         <form onSubmit={submitForm}>

//               <div className="card flex justify-content-center">
//                 <FloatLabel>
//                   <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
//                   <label htmlFor="username">Username</label>
//                 </FloatLabel>
//               </div>
        
//               <div className="card flex justify-content-center">
//                 <FloatLabel>
//                   <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
//                   <label htmlFor="name">Name</label>
//                 </FloatLabel>
//               </div>
        
//               <div className="card flex justify-content-center">
//                 <Password value={password} onChange={(e) => setPassword(e.target.value)} toggleMask required/>
//               </div>
    
//               <div className="flex-auto">
//                     <label htmlFor="email" className="font-bold block mb-2">
//                             Email
//                     </label>
//                     <InputText value={email} id="email" keyfilter="email" className="w-full" onChange={(e)=>setEmail(e.value)} required/>
//                 </div>

//               <div className="card flex justify-content-center">
//                       <InputMask value={phone} invalid mask="999-9999999" placeholder="999-9999999" onChange={(e)=>setPhone(e.value)}/>
//               </div>

//               <div className="card flex justify-content-center">
//                     <Button label="Submit" type='submit'/>
//                 </div>
//             </form>
//           </>
 
//   )
// }

// export default Register


import React, { useEffect, useState,useRef } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import Axios from "axios";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';


const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPssword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [rol, setRol] = useState('user');
    const [active, setActive] = useState(true);
    const [checked, setChecked] = useState(false);
      const toastTopRight = useRef(null);
  
       const showMessage = (event, ref, severity) => {
        const label = event;
        ref.current.show({ severity: severity, detail:"על מספר הטלפון להכיל לפחות 7 ספרות!", life: 3000 });
    };

    const checkMail = (mail) => {
        alert("1111")
        if (mail.indexOf('@') === -1 || mail.indexOf('.') === -1 || mail.indexOf('.') <= mail.indexOf('@') + 1 || mail.indexOf('@') === 0)
            return false;
        return true;
    }


    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        if (!userName || !name || !password) {
            alert("שם משתמש, סיסמא ושם הם שדות חובה")
            return
        }

        const correct = checkMail(email)
        if (!correct) {
            alert("המייל לא חוקי")
            return
        }

        try {
            alert(rol)
            const {data}=await Axios.post("http://localhost:44444/api/user/re",{username:userName,password,name,email,phone})
            // const { data } = await Axios.post("http://localhost:1234/api/users", { username: userName, password, name, email, phone, role: rol })
            console.log(data)
            // if(!data || !data.length)
            //   alert("nooooo")
            // // setUsers(data) 
            // // alert(users) 
            // else
            navigate("/all/login")
        } catch (e) {
            showMessage(e.response.data, toastTopRight, 'info')      
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
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label style={{ color: "#af9982ff" }} className="w-6rem">Phone</label>
                            <InputText style={{ backgroundColor: "#e7cfb5ff", boxShadow: "2px 2px 10px #e7cfb5ff" }} id="phone" type="text" className="w-12rem" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                            <label style={{ color: "#af9982ff" }} className="w-6rem">Email</label>
                            <InputText style={{ backgroundColor: "#e7cfb5ff", boxShadow: "2px 2px 10px #e7cfb5ff" }} id="email" type="text" className="w-12rem" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="card flex justify-content-center" style={{backgroundColor:"#fbf4ec",color:"#af9982ff"}}>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                    <RadioButton inputId="role1" name="role" value="user" onChange={(e) => setRol(e.value)} checked={rol === 'user'} />
                                    <label htmlFor="role1" className="ml-2">user</label>
                                </div>
                                <div className="flex align-items-center">
                                    <RadioButton inputId="role2" name="rol" value="admin" onChange={(e) => setRol(e.value)} checked={rol === 'admin'} />
                                    <label htmlFor="role2" className="ml-2">admin</label>
                                </div>
                            </div>
                        </div>
                        <Button label="Register" className="w-10rem mx-auto" style={{ backgroundColor: "#cdb69eff", color: "#af9982ff" }} onClick={(e) => { submitForm(e) }}></Button>
                    </div>
                </div>    </div>
        </>
    )
}

export default Register

