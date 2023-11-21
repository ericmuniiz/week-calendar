import "./App.css"
import { useState } from "react";
import Semana from "./Components/Semana";

function App(){

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
}

const closeModal = () => {
    setIsModalOpen(false);
}
 
return(
  <>
    <div>Calendario</div>
    <div className="quadro">
    <div className="semana">
      <div className="card_dia">DOM</div>
      <div className="card_dia">SEG</div>
      <div className="card_dia">TER</div>
      <div className="card_dia">QUA</div>
      <div className="card_dia">QUI</div>
      <div className="card_dia">SEX</div>
      <div className="card_dia">SÁB</div>
    </div>
    {Semana(openModal)}
    {Semana(openModal)}
    {Semana(openModal)}
    {Semana(openModal)}
    </div>
    
    {isModalOpen && (
      <div className="modal-background">
          <div className="modal">
            <p>Escolher Disciplina</p>
            <select name="" id="">
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
              <option value="someOption">Some option</option>
              <option value="otherOption">Other option</option>
            </select>
            
              <button onClick={closeModal}>X</button>
          </div>
      </div>
            )}
  </>
)
};

export default App;