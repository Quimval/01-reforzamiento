import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
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
      {/* <Contador></Contador> */}
      {/* <ContadorConHook></ContadorConHook> */}
      <Login></Login>
      <hr></hr>
    </div>
  )
}

export default App;
