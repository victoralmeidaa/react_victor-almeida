import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


export default function RedesSociais(){
    return (
      <div className="perfil-redes">
        <a href="https://www.linkedin.com/in/victalmeida/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="perfil-icone" />
        </a>

        <a href="https://github.com/victoralmeidaa" target="_blank" rel="noopener noreferrer">
          <FaGithub className="perfil-icone" />
        </a>

        <a href="https://www.instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">        
          <FaInstagram className="perfil-icone" />
        </a>
      </div>
    )
}