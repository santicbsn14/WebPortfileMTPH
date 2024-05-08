import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function Loader() {
    const loaderStyle = {
        width: '100%',
        margin: '0', // Eliminamos el margen
        overflow: 'hidden',
        display:'flex',
        justifyContent:'center' // Ocultamos el contenido que se extiende más allá del ancho
      };
 
  return <section  style={loaderStyle}  > <ClipLoader
  color={'white'}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"

/>;</section >
  
}

export default Loader  