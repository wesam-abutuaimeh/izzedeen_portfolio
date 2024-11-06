import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import LandingSection from "./pages/LandingSection";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Routes>
          <Route index element={<LandingSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
