import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <Header/>
        <div className="Content">
          <div className="LeftColumn">
            <Contact />
            <br></br>
            <Education/>
            <br></br>
            <Skills/>
          </div>
          <WorkExperience/>
        </div>
      </div>
    </div>
  );
}
