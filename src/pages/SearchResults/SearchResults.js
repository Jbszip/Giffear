import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import Search from 'components/Search/Search'
import {useCallback, useRef, useEffect} from 'react'
import { useNearScreen } from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import {Helmet} from 'react-helmet'
import BtnToTop from 'components/ToTop'

export default function SearchResult ({ params }) {
    const { keyword } = params
    const {gifs, setPage} = useGifs({keyword})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef : externalRef,
        once: false
    })
    const title = `Resultados de ${decodeURI(keyword)} | GifSer`
    const contenido = `Results of: ${decodeURI(keyword)}`


    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

    useEffect(function (){
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    return (
        <>
            <Helmet>
                <title>{decodeURI(title)}</title>
                <meta name="description" content={contenido} />
            </Helmet>
            <Search />
            <div className="App-wrapper">
                <h3 className='App-Title'>{decodeURI(keyword)}</h3>
                <BtnToTop />
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </div>
        </>
    )
}