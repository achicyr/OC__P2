import React from 'react'


export default function Nav(){

    return <nav>
        <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
        <h2>En plein centre ville ou en pleine nature</h2>
        <form>
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" placeholder="Marseille, France" />
            <button>Rechercher</button>
        </form>
        <ul>
            <li className="safe">Filtres</li>
            <li><i className="fas fa-money-bill-wave"></i><span>Économique</span></li>
            <li><i className="fas fa-male"></i><span>Économique</span></li>
            <li><i className="fas fa-heart"></i><span>Économique</span></li>
            <li><i className="fas fa-dog"></i><span>Économique</span></li>
        </ul>
        <div className="indices"><i className="fas fa-info"></i><span>Plus de 500 logements sont disponibles dans cette ville</span></div>
    </nav>
}