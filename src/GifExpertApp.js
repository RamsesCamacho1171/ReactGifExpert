import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  
  const [categories, setCategories] = useState(['One Punch']);

//   const handleAdd = () =>{
//         // setCategories(['naruto',...categories]);
//         setCategories(cats => [...cats,'yugioh']);
//   }
    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ol>
            {
                categories.map(category => (
                    //<li key={ category }>{category}</li>
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </ol>
    </>
    
    
  )
}
