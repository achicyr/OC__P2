import React from 'react'
import logo from './images/logo/Booki@3x.png' 


export default function Headers(){

    return <header>
        <picture>
            <img src={logo} alt="logo" />
            <source />
        </picture>
        <menu>
            <li className="active"><a href="#hebergements">Hébergements</a></li>
            <li><a href="#activites">Activités</a></li>
        </menu>
    </header>
}