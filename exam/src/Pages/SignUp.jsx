import React from 'react'
// import Navbar from '../Component/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function SignUp() {
    const [name, setName] = React.useState("")
    const [Password , setPassword] = React.useState("")
    const [email , setEmail] = React.useState("")
    const navigator = useNavigate()

    const handelSigup = ()=>{
        axios.post('https://fakestoreapi.com/users' , {
            name:name, 
            Password:Password, 
            email:email
        })
        .then((res)=>{
            console.log(res);
        })
        if(name.length < 4) {
            alert("Name Should be contain Foure Charachters");
            return;
        }
        const emailValidation = /'[a-z0-9]+@[a-z]+\.[a-z]{2}'/
        if (emailValidation.test(email)){
            alert("Check Email");
            return;
        }
        const passwordValidation = /^([\W\w])([^\s]){8,16}$ /
        if (passwordValidation.test(Password)){
            alert("Check password");
            return;
        }
        navigator("/Login")

    }
  return (
    <>
    <div className='h-14 w-full bg-[#195952ff]'>
<div className='flex justify-between'>
<div className='flex gap-5 mt-3 ml-3'>

   <Link to = "/SignUp">
   <button className='bg-white p-1 rounded-lg font-serif text-lg'>SingUp</button>
   </Link>
   

 <Link to='/Login'>
 <button className='text-white p-1 rounded-lg font-serif text-lg' >LogIn</button>
 </Link>

</div>

{/* <div className='flex'>
<button className='text-black text-center bg-[#ffded6ff] w-10 h-10 mt-3'><IoSearch/></button>
<input type="text-black" className='mt-3 w-[30vw]  ' placeholder='Search Amazon'/>
</div> */}

<div className='mt-3 mr-3'>
    
    <img className="w-20"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
   
</div>
</div>



    </div>

<div className='flex justify-around mt-52' >
<div className='bg-black w-[40vw] h-[45vh] flex flex-col justify-center items-center rounded-lg gap-3'>
    <img className='w-[15vw]' src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="" />
    <h1 className='text-2xl font-serif text-white'>Create You account?</h1>
    <Link to="/Login">
    <h1 className='text-white'>Already registered? <span className='text-[#f7a623ff]'>Sign in</span></h1>

    </Link>

</div>



<div className='flex flex-col justify-center items-center gap-9'>
    <h1 className='text-2xl'>SignUp</h1>
    <input type="text" className="w-[25vw] h-10 rounded-lg text-black bg-white border-x-2"value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full Name'/>
    <input type="email"className="w-[25vw] h-10 rounded-lg text-black bg-white border-x-2" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your Email' />
    <input  className="w-[25vw] h-10 rounded-lg text-black bg-white border-x-2" value={Password}  onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter your Password'/>

    <button className='bg-[#f7a623ff] p-1 w-[25vw] h-10 rounded-lg text-white  text-xl font-serif' onClick={handelSigup}>Create Your Account</button>
</div>




</div>




    </>

  )
}

export default SignUp