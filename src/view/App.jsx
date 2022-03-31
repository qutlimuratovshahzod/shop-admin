import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <div className="p-4 flex justify-between h-screen bg-base-200 w-24">
        <Sidebar/>
           <Routes>
               <Route path='/' element={<AddProduct/>}/> 
            </Routes>
      </div>
    </div>
  );
}
export default App;
