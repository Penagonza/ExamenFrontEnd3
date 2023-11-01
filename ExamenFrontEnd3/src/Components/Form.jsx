import { useState } from 'react';
import Card from './Card';
import './Form.css'

const Form = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [mostrarCard, setMostrarCard] = useState(false);

    const handleInput1Change = (e) => {
          setInput1(e.target.value);
        };
        const handleInput2Change = (e) => {
          setInput2(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
        
            let mensajeError = '';
        
            if (input1.length < 3 || input1.trim() !== input1) {
                mensajeError = 'La marca debe tener más de 3 caracteres';
            } else if (input2.length < 6) {
                mensajeError = 'El modelo debe tener más de 6 caracteres';
            }
        
            setErrorMessage(mensajeError);
        
            if (!mensajeError) {
                setMostrarCard(true);
            }
        }

        let componenteCard = null;
            if (mostrarCard) {  
                componenteCard = <Card marcaAuto={input1} modeloAuto={input2}/>;
            }



  return (
    <>
    <form className="formulario" onSubmit={handleSubmit}>
    <div className="input-group">
    <label htmlFor="input1">Marca de auto favorita: </label>
    <input type="text" placeholder='Marca'onChange={handleInput1Change}/>
    </div>
    <div className="input-group">
    <label htmlFor="input2">Modelo favorito de la marca: </label>
    <input type="text" placeholder='Modelo' onChange={handleInput2Change}/>
    </div>
    <button type="submit">Submitir</button>
    </form>
    {errorMessage && <div className="error-message">{errorMessage}</div>}
    {componenteCard}
    

    </>
  )
}
export default Form