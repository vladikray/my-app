import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeesApp from "./EmployeesApp";

function App() {

  return (<BrowserRouter>
            <EmployeesApp/>
      </BrowserRouter>
  );
}

export default App;
