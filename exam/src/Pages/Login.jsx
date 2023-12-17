
    import React from 'react'
    import axios from 'axios'
import { Link } from 'react-router-dom';

    import { useNavigate } from 'react-router-dom'
    function Login() {
    const [name , setName] = React.useState("")
    const [password , setpassword] = React.useState("") 
    const [data, setData] = React.useState([])
    const navigator = useNavigate()
    
        const handelLogin = ()=>{
            
            axios.get("https://fakestoreapi.com/users")
            .then((res)=>{
                console.log(res.data);
                setData(res.data)
                const findaccount = res.data.find(user => user.name === name && user.password === password)
                if(findaccount){
                    localStorage.setItem("userId" , findaccount.id)
                    alert("find account")
                    navigator("/")
                } else{
                    alert("Account Not Found Should be Registraion in SignUp")
                }
            })
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
    <h1 className='text-2xl font-serif text-white'>Welcome Back</h1>
    <h1  className='text-[#f7a623ff]'>Log in</h1>

</div>



<div className='flex flex-col justify-center items-center gap-9'>
    <h1 className='text-2xl'>Log In</h1>
    <input type="text" className="w-[25vw] h-10 rounded-lg text-black bg-white"value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full Name'/>
    <input type="password" className="w-[25vw] h-10 rounded-lg text-black bg-white" value={password}  onChange={(e)=> setpassword(e.target.value)} placeholder='Enter your Password'/>
    <button className='bg-[#f7a623ff] p-1 w-[25vw] h-10 rounded-lg text-white  text-xl font-serif' onClick={handelLogin}>LogIn</button>
</div>


</div>








    </>
  )
}

export default Login