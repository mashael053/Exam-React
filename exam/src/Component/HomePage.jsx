import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import Header from './Header'

function HomePage() {

    const [data, setData] = React.useState([])
    React.useEffect(() => {

        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
           console.log(res.data)
           setData(res.data)

        })
    }, [])


  return (

    <>

<div className='h-14 w-full bg-[#195952ff]'>
<div className='flex justify-between'>
<div className='flex gap-5 mt-3 ml-3'>

   <Link to = "/SignUp">
   <button className='bg-white p-1 rounded-lg font-serif text-lg'>LogOut</button>
   
   </Link>



</div>

<div className='flex'>
<button className='text-black text-center bg-[#ffded6ff] w-10 h-10 mt-3'><IoSearch/></button>
<input type="text-black" className='mt-3 w-[30vw]  ' placeholder='Search Amazon'/>
</div>

<div className='mt-3 mr-3'>
  
    <img className="w-20"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
   
</div>
</div>

    </div>


<Header></Header>
    <div>

            {data.map((item) => (
                <div key={item.id}>


<div className='flex justify-start mt-20 ml-10 shadow-xl border-black w-[40vw] flex-col gap-3'>
<div className='flex flex-col justify-center items-center gap-3 '>

<img  className="w-52 rounded-2xl "src={item.image}/>
                    <br/>
                    <p className=' font-serif'>{item.title}</p>
                    <p className='font-bold'>{item.price} SR</p>
                    <Link to="/Moredetailes">
                    <button className='bg-[#ccac54ff] font-sans mb-3 p-1 rounded-md'>More Details</button>
                    </Link>
                </div>
                    </div>
</div>




            ))}
    

    </div>

    </>
  )
}

export default HomePage