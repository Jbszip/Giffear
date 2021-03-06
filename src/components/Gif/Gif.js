import React from 'react'
import './Gif.css'
import {Link} from 'wouter'

function Gif({ title, id, url }) {
    return (
        <Link to={`/gif/${id}`} className='Gif-link'>
            <h4>{title}</h4> 
            <img alt={title} src={url} />
        </Link>
    )     
}
export default React.memo(Gif)