import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//import React, { Fragment } from 'react';

const GifExpertApp = ({ titulo }) => {

    const [categories, setCategories] = useState(['Robotech']);

    return (
        <>
            <h2>{ titulo }</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {/* <button onClick={ handelAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( (category,i) => (
                        <GifGrid
                            key={category+i}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
        );
}

GifExpertApp.propTypes = {
    titulo: PropTypes.string.isRequired,
}
GifExpertApp.defaultProps ={
    titulo : 'Gif Expert',
}

export default GifExpertApp;