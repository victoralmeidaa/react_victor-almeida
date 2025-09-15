import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


export default function RedesSociais(){
    return (
      <div className="perfil-redes">
        <div className="icon-linkedin-box">
          <a href="https://www.linkedin.com/in/victalmeida/" 
            target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon-linkedin" />
          </a>
        </div>
        
        <div className="icon-github-box">
          <a href="https://github.com/victoralmeidaa" 
            target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon-github" />
          </a>
        </div>

        <div className="icon-instagram-box">
          <a href="https://www.instagram.com/vict_5" 
            target="_blank" rel="noopener noreferrer">        
            <FaInstagram className="icon-instagram" />
          </a>
        </div>
      </div>
    )
}