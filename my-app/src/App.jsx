import Chess from "./Chess";
import DefaultExport from "./DefaultExport";
import { NamedExport } from "./NamedExport";
import Navbar from "./Navbar";
import "./App.css"

function App(){
  return(
    <div>
      <Navbar></Navbar>
      <Chess></Chess>
      <DefaultExport></DefaultExport>
      <NamedExport></NamedExport>
    </div>
  )
}
export default App