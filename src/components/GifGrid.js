import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';
//siempre desestructura
export const GifGrid = ({category}) => {
  
    const {data:images,loading} = useFetchGifs(category);
    //console.log(loading);
    // getGifs();
    
    return (
        <>
            <h3 className='animate__animated animate__tada'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p> }
            <div className='card-grid'>
               
            {
                // images.map(({id,title}) =>(
                //     <li key={id}>{title}</li>
                // ))
            images.map(img =>(
                //<li key={img.id}>{img.title}</li>
                <GifGridItem 
                    key={img.id}
                    {...img} //manda todo alv
                    />
            ))
            //<li>item</li>
            }
            </div>        
        </>
  )
}
