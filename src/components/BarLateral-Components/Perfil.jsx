import "../../styles/Perfil.css";
import MinhaFoto from "../../img/eu.jpg";
import RedesSociais from "./RedesSociais.jsx";
import InfoContato from "./InfoContato.jsx";

export default function Perfil() {
  return (
    <div className="perfil">
        <img src={MinhaFoto} alt="Foto de perfil" className="perfil-foto" />
        <h2 className="perfil-name">Victor Almeida</h2>
        <p className="perfil-descricao">🚀 Desenvolvedor Fullstack em Construçao 🚀</p>
        <div className="redesSociais">
            <RedesSociais />
            <InfoContato /> 
        </div>
    </div>
  );
}
