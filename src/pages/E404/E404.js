import React from 'react'
import {Helmet} from 'react-helmet'
import StyledButton from 'components/Button'
import './E404.css'


export default function E404 () {
    const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I', '8L0Pky6C83SzkzU55a', 'fV1yHo8YyoKjzvMCKr'];
    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
      }
    
    return (
        <>
            <h2>404 :(</h2>
            <p>No pudimos encontrar la página que buscabas.</p>
            <img src={randomImage()} alt="alt-page-404" />
            <StyledButton href="/">Volver al inicio</StyledButton>
            <Helmet>
                <title>Página no encontrada | GifSer</title>
                <meta name="description" content="404 not found" />
            </Helmet>
        </>
    )
}