import {useState, useEffect} from 'react'
import getSingleGif from 'services/getSingleGif'
import useGifs from 'hooks/useGifs'

export default function useSingleGif ({id}){
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif =>
        singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)
    const [isError, setIsError] = useState(false)

    

    useEffect(function (){
        if(!gif){
            getSingleGif({id})
            .then(gif => {
                setGif(gif)
                setIsError(false)
            }).catch(err=>{
                setIsError(true)
            })
        }
    }, [gif, id])
    return {gif, isError}
}