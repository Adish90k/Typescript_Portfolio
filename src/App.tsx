
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Service from "./components/Services/Service";
import Skills from "./components/Skills/Skills";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Profile />
      <Service />
      <Projects />
      <Skills />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
