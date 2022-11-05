import Contact from "./Contact"
import Home from "./Home";
import { Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div classNameName="App">
        
       <Routes>
        <Route Exact path  ="/" element = {<Home/>}/>
        <Route Exact path="/contact" element = {<Contact/>}/>
       </Routes>
        </div>
  );
}

export default App;
