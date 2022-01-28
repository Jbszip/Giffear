import {useState, useEffect, useContext} from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs ({keyword} = {keyword : localStorage.getItem('LastKeyword')}){
    const {gifs, setGifs} = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    //Si no tenemos keyword recuperamos la última del local storage (para la última busqueda del home)
    const keywordToUse = keyword || 'League of legends'
    
    useEffect(function () {
         
        getGifs({ keyword : keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                //Guardamos la keyword en el local storage para usarla de ser necesario
                localStorage.setItem('LastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs])

    useEffect(function () {
        if (page === INITIAL_PAGE) return
        getGifs({ keyword: keywordToUse, page })
          .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
          })
      }, [keywordToUse, page, setGifs])
    return {gifs, setPage}
}