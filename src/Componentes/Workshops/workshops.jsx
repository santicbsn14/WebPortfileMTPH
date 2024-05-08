import React from "react";

function Workshops({ workshop }) {
    // Verifica si workshop está definido antes de acceder a sus propiedades
    if (!workshop) {
        return <div>No hay talleres disponibles</div>;
    }

    return (
        <div style={{width:'max-content', margin:'auto', marginRight:'50px'}}>
            <h2>{workshop.title}</h2>
            <div style={{maxWidth:'300px'}}>
            {workshop.levels && workshop.levels.map((level, index) => (
                <p style={{marginRight:'0px',overflowWrap: 'break-word'}} key={index}>
                    <strong>Nivel {index + 1}:</strong> {level}
                </p>
            ))}
            </div>
        </div>
    );
}

export default Workshops;
