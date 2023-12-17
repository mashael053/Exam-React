import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';



function Navbar() {
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

<div className='flex'>
<button className='text-black text-center bg-[#ffded6ff] w-10 h-10 mt-3'><IoSearch/></button>
<input type="text-black" className='mt-3 w-[30vw]'  placeholder='Search Amazon'/>
</div>

<div className='mt-3 mr-3'>
  
    <img className="w-20"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
   
</div>
</div>



    </div>


    </>
  )
}

export default Navbar