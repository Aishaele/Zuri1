import profileimg from "./img1.jpg"
import arrow from "./arrow.svg"
import menu from "./menu.svg"
import colors from "./colors.svg"
import github from "./github.svg"
import foo from "./footerimg.svg"

function App() {
  return (
    <div classNameName="App">
    <div className="hero">
        <div className="wrapper">
            <img className="arrow" src={arrow} alt=""/>
            <img className="menu" src={menu} alt=""/>
        <div className="profile">
            <img id='profile_img' src={profileimg} alt=""/>
            <h3 id='slack'>AishaEle Amodu</h3>
        </div>
        <div className="style-a-tag">
          
            <button><a id='twitter' href="https://twitter.com/AishaeleA">Twitter Link</a></button>
            <button><a id='‘btn__zuri' href="https://training.zuri.team">Zuri Team</a></button>
            <button><a id='‘books' href="http://books.zuri.team">Zuri Book</a></button>
            <button> <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=nanaaishaeleamodu">Python Books</a></button>
            <button><a id='pitch' href="https://background.zuri.team">Background Check for Coders</a></button>
            <button> <a id= 'book__design' href="https://bookszuri.team/design-rules">Design Books</a></button>
        </div>
        <div className="style-logo">
            <img className="" src= {colors} alt=""/>
            <img src={github} alt=""/>
        </div>
        <footer>
            <h3>Zuri<span className="dot">.</span>Internship</h3>
            <h4> HNG Internship 9 Frontend Task</h4>
            <img src={foo} alt=""/>
        </footer>
        </div>
    </div>
    </div>
  );
}

export default App;
