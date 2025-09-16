import Navbar from "./components/Navbar";
import BarLateral from "./components/BarLateral";
import MainContainer from "./components/MainConteiner";
import "./styles/Layout.css";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <h1 className="portfolioName"></h1>
      <div className="conteines">

        <BarLateral />
        <MainContainer />
      </div>
    </div>
  )
  
}

export default App;
