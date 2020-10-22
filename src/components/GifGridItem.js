import React from 'react'

export const GifGridItem = ({title, image}) => {
    //console.log(id, title, image)
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={image} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
