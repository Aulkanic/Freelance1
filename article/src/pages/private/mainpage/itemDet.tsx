/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Image } from 'antd';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RouterUrl } from '../../../routes';

interface T_ItemsProps{
    albumId: number,
    id: number,
    title: string,
    url:string,
    thumbnailUrl: string; 
}
export const ItemDetails = () => {
    const navigate = useNavigate()
    const [allItems,setAllItems] = useState<T_ItemsProps[]>([])

    async function Fetch() {
        const storedItem = localStorage.getItem('selectedItem');

        if (storedItem) {
            const data = JSON.parse(storedItem)
            console.log(data)
            setAllItems([data])
        }
    }
    useEffect(() =>{
       Fetch()
    },[])

  return allItems.length > 0 ? (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-max h-max'>
            <p className='font-semibold text-[24px]'>Album Id: {allItems[0].albumId}</p>
            <p className='font-semibold text-[24px]'>Title: {allItems[0].title}</p>
            <div className='flex gap-4'>
                <div>
                <p className='font-semibold text-[24px]'>Url:</p>
                <Image className='aspect-square border-2 border-black' width={250} src={allItems[0].url} alt="" />
                </div>
                <div>
                <p className='font-semibold text-[24px]'>Thumbnail Url:</p>
                <Image className='aspect-square border-2 border-black' width={250} src={allItems[0].thumbnailUrl} alt="" />
                </div>

            </div>
            <Button className='w-full my-4 bg-sky-600 text-white font-semibold' onClick={() => navigate(RouterUrl.mainPage)}>
                BACK
            </Button>
        </div>
    </div>
  ) : <div>Loading data...</div>
}
