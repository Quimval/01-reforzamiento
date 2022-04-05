import { Contador } from "./components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";


const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <hr></hr>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales></ObjetosLiterales> */}
      {/* <Funciones></Funciones> */}
      <Contador></Contador>
      <hr></hr>
    </div>
  )
}

export default App;
