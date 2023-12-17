import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
function Moredetailes() {

    const [data, setData] = React.useState([])
    const {id} = useParams()


    React.useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) =>{
           console.log(res.data)
           setData(res.data)
        })
    }, [])

  return (
    <>

    

    <h1 className='text-center font-serif text-xl'>Detailes About Prodacts</h1>

    <div>

            
                <div key={data.id}>
<div className='flex justify-start mt-20 ml-10 shadow-xl border-black w-[40vw] flex-col gap-3'>
<div className='flex flex-col justify-center items-center gap-5 '>

<img  className="w-52 rounded-2xl "src={data.image}/>
                    
                    <p className='font-bold'>{data.price}SR</p>
                    <p className=' font-serif'>{data.title}</p>
                    <p className='mb-4'>{data.description}</p>
                    <button className='bg-green-800 p-5 rounded-md mb-1 text-white '><FaCartShopping /></button>
                </div>
                </div>
</div>


</div>
    </>
  )
}

export default Moredetailes