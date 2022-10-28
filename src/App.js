import profileimg from "./img1.jpg"
import arrow from "./arrow.svg"
import menu from "./menu.svg"

function App() {
  return (
    <div className="App">
    <div class="hero">
        <div class="wrapper">
            <img class="arrow" src={arrow} alt=""/>
            <img class="menu" src={menu} alt=""/>
        <div class="profile">
            <img id='profile_img' src={profileimg} alt=""/>
            <h3 id='slack'>AishaEle Amodu</h3>
        </div>
        <div class="style-a-tag">
            <a id='Twitter' href="https://twitter.com/AishaeleA">Twitter Link</a>
            <a id='books' href="https://training.zuri.team">Zuri Team</a>
            <a id='Zuri Books' href="http://books.zuri.team">Zuri Book</a>
            <a id='book_python' href="https://books.zuri.team/python-for-beginners?ref_id=nanaaishaeleamodu">Python Books</a>
            <a id='pitch' href="https://background.zuri.team">Background Check for Coders</a>
            <a id='book_design' href="https://bookszuri.team/design-rules">Design Books</a>
        </div>
        <div class="style-logo">
            <img class="" src="./colors.svg" alt=""/>
            <img src="./github.svg" alt=""/>
        </div>
        <footer>
            <h3>Zuri<span class="dot">.</span>Internship</h3>
            <h4> HNG Internship 9 Frontend Task</h4>
            <img src="./footerimg.svg" alt=""/>
        </footer>
        </div>
    </div>
    </div>
  );
}

export default App;
