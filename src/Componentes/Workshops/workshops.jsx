import React from "react";
import './workshops.css'
function Workshops({ workshop }) {
    // Verifica si workshop está definido antes de acceder a sus propiedades
    if (!workshop) {
        return <div>No hay talleres disponibles</div>;
    }

    return (
        <div className="container-workshop">
            <h2>{workshop.title}</h2>
            <div>
            {workshop.levels && workshop.levels.map((level, index) => (
                <p  key={index}>
                    <strong>Nivel {index + 1}:</strong> {level}
                </p>
            ))}
            </div>
        </div>
    );
}

export default Workshops;
