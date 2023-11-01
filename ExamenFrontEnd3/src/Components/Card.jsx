import './Card.css'

const Card = ({marcaAuto, modeloAuto}) => {
  return (
    <div className="card">
            <h2>Información del Auto</h2>
            <p>Marca: {marcaAuto}</p>
            <p>Modelo: {modeloAuto}</p>
        </div>
  )
}

export default Card