import "../App.css";


function Dia(dia_semana){

  
    return(
    <>
    <div className="card-dia">
    <p>{dia_semana}</p>
        <div className="infos-dia">
            <button>Ensalar</button>
        </div>
    </div>
    </>
    )
    }

export default Dia;