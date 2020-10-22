import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    //console.log(loading);

    return (
        <>
            <h4>{category}</h4>
            {loading && <p className="animate__animated animate__flash">Cargando imágenes...</p> }
            <div className="card-grid">
                {
                images.map( (img) => (
                    <GifGridItem img={img} {...img} key={img.id} />
                    ))
                }    
                
            </div>
        </>
    )
}