import "./index.css"; 
import { Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

const Home = () => <div className="p-8">Welcome to TheSoft.space</div>;
const Library = () => <div className="p-8">Library page</div>;
const Reflections = () => <div className="p-8">Reflections page</div>;
const Practices = () => <div className="p-8">Practices page</div>;
const Support = () => <div className="p-8">Support page</div>;

const App = () => (
  <div className="flex flex-col min-h-screen bg-[--color-bg] text-[--color-text] font-chillax-regular">
    <SideMenu />
    <main className="flex-1 pl-64 pt-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reflections" element={<Reflections />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
