import logo from './logo.svg';
import hcbgImage from "./wallpaper.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <li>Home</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Skills</li>
      </div>
      <div className="WelcomeSection">
        <div className="Introduction">
          <div className="ProfilePicture">
            <div>Profile Pic</div>
            <div>Contacts</div>
          </div>
          <div className="Biography">
            <div>
              Divyansh is a graduate in Computer Science and Engineering xs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
