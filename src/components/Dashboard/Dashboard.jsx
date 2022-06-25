import VentanaDashboard from "./ventana";
import Sidebar from "../Sidebar";

export default function Dashboard(){
  
  return (
    <div className="flex">
      <Sidebar/>
      <div className="h-screen flex-1 p-7" id="hp">
        <VentanaDashboard/>
      </div>
    </div>
  );
}