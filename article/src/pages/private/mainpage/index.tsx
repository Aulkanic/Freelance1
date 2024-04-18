/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const navigate = useNavigate()
    const [allItems,setAllItems] = useState([])

    async function Fetch() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setAllItems(res.data)
    }
    useEffect(() =>{
       Fetch()
    },[])
  const navigatePage = (data:any) =>{
    localStorage.setItem('selectedItem', JSON.stringify(data));
    navigate(`/Photos/albumId/${data.albumId}`)
  }
  return allItems.length > 0 ? (
    <div>
        <h1 className='text-center font-semibold text-[32px] my-12'>All data</h1>
        <div className='w-full flex flex-wrap justify-center items-center gap-4'>
        {allItems?.map((data:any,idx:number) =>(
            <div onClick={() => navigatePage(data)} key={idx} className='w-[250px] h-max cursor-pointer'>
                <img src={data.url} className='w-[250px] aspect-square border-2 border-black'  />
                <p className='w-full h-[50px] line-clamp-3'>{data.title}</p>
            </div>
        ))}
        </div>

    </div>
  ) : <div>Loading data...</div>
}
