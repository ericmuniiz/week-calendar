import "./App.css"
import { useState } from "react";

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
    <div className="quadro"></div>
    <div className="semana">
    <div className="card_dia">
    <p>Domingo</p>
    <div className="nostudy_days"></div>
    </div>
    <div className="card_dia">
    <p>Segunda</p>
    <div><button onClick={openModal}>+</button></div>
    </div>
    <div className="card_dia">
    <p>Terça</p>
    <div><button onClick={openModal}>+</button></div>
    </div>
    <div className="card_dia">
    <p>Quarta</p>
    <div><button onClick={openModal}>+</button></div>
    </div>
    <div className="card_dia">
    <p>Quinta</p>
    <div><button onClick={openModal}>+</button></div>
    </div>
    <div className="card_dia">
    <p>Sexta</p>
    <div><button onClick={openModal}>+</button></div>
    </div>
    <div className="card_dia">
    <p>Sábado</p> 
    <div className="nostudy_days"></div>
    </div>
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