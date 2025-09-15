import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

export default function InfoContato(){
    return(
        <div className="info-contato">
            <div className="contato-item">
                <div className="icon-box">
                    <AiFillPhone id="icon-phone"/>
                </div>
                <div className="contato-texto">
                    <h3>Telefone: </h3>
                    <p>(47) 98407-5819</p>
                </div>
            </div>
            
            <div className="contato-item">
                <div className="icon-box">
                    <AiOutlineMail id="icon-email"/>
                </div>
                <div className="contato-texto">
                    <h3>Email: </h3>
                    <p>victoralmeida5@gmail.com</p>
                </div>
            </div>
            
            <div className="contato-item">
                <div className="icon-box">
                    <AiFillEnvironment id="icon-pin"/>
                </div>
                <div className="contato-texto">
                    <h3>Cidade: </h3>
                    <p>Itajai / SC</p>
                </div>
            </div>            
        </div>
    )

}