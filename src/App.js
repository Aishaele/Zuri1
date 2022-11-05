import Contact from "./Contact"
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div classNameName="doll">

       <Routes>
        <Route Exact path  ="/" element = {<Home/>}/>
        <Route Exact path="/contact" element = {<Contact/>}/>
       </Routes>
       <Footer />
       
        </div>
        
  );
}

export default App;
