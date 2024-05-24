import "./App.css";
import UserDetails from "./pages/UserDetails";
import Validation from "./pages/Validation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Validation />}></Route>
          <Route path="/userdetails" element={<UserDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
