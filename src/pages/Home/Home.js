import React from 'react'
import useGifs from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import Search from 'components/Search/Search'
import {Helmet} from 'react-helmet'
import BtnToTop from 'components/ToTop'

export default function Home () {
    const {gifs} = useGifs()

    return (
        <>
            <Helmet>
                <title>Busca tu Gif | Giffear</title>
                <meta name="description" content="GifSer Home" />
            </Helmet>
            <Search />
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3>Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                        <BtnToTop />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
             </div>       
        </>
    )
}