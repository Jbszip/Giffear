import React from 'react'
import {Barra, SButton} from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export function SearchBar({id, placeholder, type, onChange, value}){
    return(
        <>
            <Barra id={id} placeholder={placeholder} type={type} onChange={onChange} value={value}  />
            <SButton><FontAwesomeIcon icon={faSearch} /></SButton>
        </>
    )
        

}
