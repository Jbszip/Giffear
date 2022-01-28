import 'components/goBack/index.css'

export default function BtnGoBack() {
    return (
        <button className="btn-go-back" onClick={() =>{window.history.back()}}>Volver Atrás</button>
        )
}