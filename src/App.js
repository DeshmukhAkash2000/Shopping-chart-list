import './App.css';
import { Routes, Route} from "react-router-dom";
import { SignIn } from './Pages/SignIn';
import {ForgotPassword} from "./Pages/Forgot-Password"
import {Dashboard} from "./Pages/Dashboard"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path='/forgotpass' element={<ForgotPassword/>}/>
        <Route path='dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
