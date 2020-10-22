import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('Ingresar una nueva categoria');
    const handelInputChange =(e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleClear = () =>{ setInputValue('')}
    const handleSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }

        //console.log('hecho');
    }
    return (
        <form onSubmit={handleSubmit}>
        <h3>Add Category</h3>
            <input 
                type="text"
                value={inputValue}
                onChange={handelInputChange}
                onFocus={handleClear}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}