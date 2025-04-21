import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:5173 */}
          <Route path="/" element={<ListEmployeeComponent />} />
          {/* // http://localhost:5173/employees */}
          <Route path="/employees" element={<ListEmployeeComponent />} />
          {/* // http://localhost:5173/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />
          {/* // http://localhost:5173/edit-employee/:id */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
    
          
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
