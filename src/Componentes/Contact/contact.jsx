import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube, faInstagram, faWhatsapp} from  '@fortawesome/free-brands-svg-icons'
import './contact.css'


function Contact(){

    const iconStyle = {
        fontSize: "1rem",
        padding : "1px",
        color: 'black'
      };
  
  return(
    <section className="container container-contact" style={{ display: 'flex', alignItems: 'center', width:'max-content', marginLeft: '300px', marginTop:'-330px' }}>
      <div style={{width:'1032px'}} className="row">
      <div className="col-lg-4 col-md-12 col-sm-12 redes-contact container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
      <div className="row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a className="col-md-12 col-sm-12" href='https://api.whatsapp.com/send?phone=%2B543364322466&text=' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="iconosRedes" icon={faWhatsapp} style={iconStyle} />
        </a>
        <span className="span-contact" style={{ color: 'black', width: '10px' }}>3364631890</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a className="col-md-12 col-sm-12" href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="iconosRedes" icon={faYoutube} style={iconStyle} />
        </a>
        <span className="span-contact" style={{ color: 'black', width: '10px' }}>3364631890</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a className="col-md-12 col-sm-12" href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="iconosRedes" icon={faFacebook} style={iconStyle} />
        </a>
        <span className="span-contact" style={{ color: 'black', width: '10px' }}>Maria Teresa Gutierrez</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a className="col-md-12 col-sm-12" href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="iconosRedes" icon={faInstagram} style={iconStyle} />
        </a>
        <span className="span-contact" style={{ color: 'black', width: '10px' }}>@Marite.gutierrezph</span>
      </div>
      </div>
    <div className="col-lg-7 col-md-12 col-sm-12 my-3">
      <form className="row formularioCon">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <label htmlFor="inputEmail4" className="form-label">Nombre y apellido</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <label htmlFor="inputPassword4" className="form-label">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-md-12 col-sm-12">
          <label htmlFor="inputAddress" className="form-label">Provincia</label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-12 col-md-12 col-sm-12">
          <label htmlFor="inputAddress2" className="form-label">Localidad</label>
          <input type="text" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-12 col-md-12 col-sm-12 my-1">
          <label htmlFor="inputAddress2" className="form-label">Mensaje</label>
          <input type="text" className="form-control message" id="inputAddress2" />
        </div>
        <div className="col-12 col-md-12 col-sm-12">
          <button type="submit" className="btn btnCards" style={{ borderColor:'black' }}>Enviar</button>
        </div>
      </form>
    </div>
      </div>
  </section>

  )
}
export default Contact