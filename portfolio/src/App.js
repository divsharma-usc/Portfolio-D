import './App.css';
import profileImage from './divImage.png';
import emailImage from './email.png';
import linkdIn from './linkdin.png';
import github from './github.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div id="leftHeaderBox">
          <a>@div</a>
        </div>

        <div id="rightHeaderBox">
          <a>About</a>
          <a>Education</a>
          <a>Skills</a>
          <a>Achievements</a>
          <a>Contact</a>
        </div>
      </div>

      <div className="mainSection">
        <div className="midSection">
          <div id="profileImage">
            <img src={profileImage} />
          </div>
          <div id="mainIntro">
            <h3>Hi, I'm Divyansh,</h3>
            <h4>a software developer specalized in back-end development, blockchain technologies and digital assets.</h4>
            <div>
              <a><img src={emailImage}/></a>
              <a><img src={linkdIn}/></a>
              <a><img src={github}/></a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div id="AboutMe" class="middleAlign">
              <h3>About Me</h3>
              <p>
                Keeping up with my passion for technology and innovation by developing Blockchain, Digital Assets and Machine Learning solutions to real business use cases. 
                2+ years of Extensive experience in designing and developing solutions using Cloud(GCP,AWS) and technologies like Tokenisation, Corda, HyperLedger, Fabric, Ethereum, Web Apps, 
                API Infrastructure using Python, Java and Kotlin. Excellent Communication and networking skills
              </p>
        </div>
      </div>
    </div>
  );
}

export default App;
