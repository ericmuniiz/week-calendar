import "../App.css";

function Semana(action){
        
    return(
        <>
        <div className="semana">
        <div className="nostudy_days"></div>
        <div className="card_dia"><button onClick={action}>+</button></div>
        <div className="card_dia"><button onClick={action}>+</button></div>
        <div className="card_dia"><button onClick={action}>+</button></div>
        <div className="card_dia"><button onClick={action}>+</button></div>
        <div className="card_dia"><button onClick={action}>+</button></div>
        <div className="nostudy_days"></div>
        </div>
        </>
)

}

export default Semana;