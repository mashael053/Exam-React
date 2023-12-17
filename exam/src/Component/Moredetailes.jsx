import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Moredetailes() {

    const [data, setData] = React.useState([])
    const {id} = useParams()


    React.useEffect(() => {

        axios.get(`https://fakestoreapi.com/products`)
        .then((res) =>{
           console.log(res.data)
           setData(res.data)
        })
    }, [])

  return (
    <>

    <h1 className='text-center font-serif text-xl'>Detailes About Prodacts</h1>

    <div>

            {data.map((item) => (
                <div key={item.id}>
        


<div className='flex justify-start mt-20 ml-10 shadow-xl border-black w-[40vw] flex-col gap-3'>
<div className='flex flex-col justify-center items-center gap-5 '>

<img  className="w-52 rounded-2xl "src={item.image}/>
                    <br/>
                    <p className='font-bold'>{item.price}SR</p>
                    <p className=' font-serif'>{item.title}</p>
                    <p className='mb-4'>{item.description}</p>

                    <button className='bg-green-800 p-1 rounded-md mb-1 text-white '>pay now</button>

                </div>
                    </div>
</div>

  ))}
    </div>
    </>
  )
}

export default Moredetailes