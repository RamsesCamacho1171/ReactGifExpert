import React, { useState } from 'react'
import PropTypes from 'prop-types';
//siempre hay que destruturar
export const AddCategory = ({setCategories}) => {
    //useState() = sin nada es undefine
  const [inputValue, setInputValue] = useState('');

  const handeInputChange = (e) =>{
      //console.log(e.target.value);
      setInputValue(e.target.value);
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();  
    if(inputValue.trim().length>1){
        setCategories(cats => [inputValue,...cats]);
        setInputValue('');
    }  
    //console.log('submit hecho');
    
  }
    return (
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={inputValue}
            onChange={handeInputChange}
        />
      </form>
  )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
