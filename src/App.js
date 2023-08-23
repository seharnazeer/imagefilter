import logo from './logo.svg';
import './App.css';
import {Signin,SignUp,Filters,FilterWindow} from "./pages";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  console.log(SignUp.name)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Signin />}></Route>
      <Route path="/signup" element={ <SignUp />}></Route>
      <Route path="/filterimage" element={ <FilterWindow />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
