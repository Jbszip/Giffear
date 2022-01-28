import React, {useState} from 'react'
import {useLocation, Link} from 'wouter'
import {SearchBar} from 'components/SearchBar'
import './index.css'


function Search(){
    const [keyword, setKeyword] = useState()
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        if(keyword === undefined){
            document.getElementById('buscar').placeholder="Debes ingresar un término"
        }else{
            pushLocation(`/search/${keyword}`)
        }
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <header class="header">
            <Link to="/" class="titulo-prin">Giffear</Link>
            <form class="barra-b" onSubmit={handleSubmit}>
                <SearchBar id="buscar" placeholder="Busca un Gif aquí..." onChange={handleChange} type='text' value={keyword} />
            </form>
        </header>
    )
}
export default React.memo(Search)