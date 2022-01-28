import 'components/ToTop/index.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'

function Scrolear(){
    window.scroll({
        top: 0,
        behavior: 'smooth'})
}
export default function BtnToTop() {
    return (
        <button className="btn-to-top" onClick={Scrolear}><FontAwesomeIcon className="to-top-icon" icon={faArrowAltCircleUp} /></button>
        )
}





