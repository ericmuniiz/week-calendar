import "./App.css"
import Dia from "./Components/Dia";

function App(){

 
return(
  <>
  <div className="quadro">
    {Dia("seg")}
    {Dia("ter")}
    {Dia("qua")}
    {Dia("qui")}
    {Dia("sex")}
  </div>
  </>
)
};

export default App;