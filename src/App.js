import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Manufacturers from "./components/Manufacturers";
import Robots from "./components/Robots"
import Video from "./components/Video";
import Feedback from "./components/Feedback";
import Fotter from "./components/Fotter";

function App() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="countainer">
        <Landing />
        <Manufacturers />
        <Robots />
        <Video />
        <Feedback />
      </div>
      <Fotter />
    </>
  );
}

export default App;
