import Todos from "./Components/Todos";
import UpdateTodo from "./Components/UpdateTodo";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" element={  <Todos/>}/>
           <Route path="/update/:todoid" element={<UpdateTodo/>}/>
           <Route path="/" element={  <Todos/>}/>
           <Route path="/" element={  <Todos/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
