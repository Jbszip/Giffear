import React from 'react'
import useSingleGif from 'hooks/useSingleGif'
import {Redirect} from 'wouter'
import {Helmet} from 'react-helmet'
import BtnGoBack from 'components/goBack'
import Search from 'components/Search/Search'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import 'pages/Detail/index.css'


export default function Detail ({params}){
    const {gif, isError} = useSingleGif({id: params.id})
    const link = gif.url
    const title = gif ? gif.title : 'Buscando...'
    const contenido = `Detail of: ${title}`
    
    if(isError) return <Redirect to="/404" />
    if (!gif) return null

    let copiar = document.querySelector('.copy-text')
    let vanish = document.querySelector('.copy-icon')
    function copyText (){
        navigator.clipboard.writeText(link);
        copiar.classList.add('copied')
        vanish.classList.add('vanish')
    }

    return (
    <>
        <Helmet>
            <title>{title} | GifSer</title>
            <meta name="description" content={contenido} />
        </Helmet>
        <Search />
        <div className="Detail-wrapper">
            <h3 className="App-Title">{gif.title.toUpperCase()}</h3>
            <div className="Gif">
                <p className="copy-text">Copiado en portapapeles</p>
                <button onClick={copyText} className="copy-icon"><FontAwesomeIcon icon={faCopy} /></button>
                <img alt={title} src={link}/>
            </div>
            <BtnGoBack />
        </div>
    </>
    )
}