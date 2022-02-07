import React from 'react'


export default function Main(){

    return <main>
        <section className="hebergements">
            <h3>Hébergements à Marseille</h3>
            <ul>                
                {/* <!-- (li>a[href="#" alt="text alternatif"]>img[src="images/hebergements/4_small/0$.jpg" alt="texte alternatif"]+h4{Auberge La Cannebière}+p{Nuit à partir de 25€}+div.star>i.fas.fa-star*4+i.fas.fa-star.empty)*5 --> */}
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/01.jpg")} alt="texte alternatif" />
                        <h4>Auberge La Cannebière</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/02.jpg")} alt="texte alternatif" />
                        <h4>Auberge La Cannebière</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/03.jpg")} alt="texte alternatif" />
                        <h4>Auberge La Cannebière</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/04.jpg")} alt="texte alternatif" />
                        <h4>Auberge La Cannebière</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/05.jpg")} alt="texte alternatif" />
                        <h4>Auberge La Cannebière</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={require("./images/hebergements/4_small/06.jpg")} alt="" />
                        <h4>Auberge La Cannebière</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
            </ul>
            <a href="">Afficher plus</a>
        </section>
        
        
        {/* <!-- section.hebergements>(h3{Les plus populaires}>i.fas.fa-chart)+ul>li>a>img+h4{Hôtel Le soleil du matin}+p{Nuit à partir de 25€}+div.star>i.fas.fa-star*5 --> */}
        <section className="populaires">
            <h3>Les plus populaires<i className="fas fa-chart-line"></i></h3>
            <ul>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/01.jpg")} alt="texte alternatif" />
                        <h4>Hôtel Le soleil du matin</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/02.jpg")} alt="texte alternatif" />
                        <h4>Hôtel Le soleil du matin</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                <li>
                    <a href="#" alt="text alternatif">
                        <img src={require("./images/hebergements/4_small/03.jpg")} alt="texte alternatif" />
                        <h4>Hôtel Le soleil du matin</h4>
                        <p>Nuit à partir de 25€</p>
                        <div className="star"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star empty"></i></div>
                    </a>
                </li>
                {/* <!-- li>a[href="#" alt="text alternatif"]>img[src="images/hebergements/4_small/0$.jpg" alt="texte alternatif"]+h4{Hôtel Le soleil du matin}+p{Nuit à partir de 25€}+div.star>i.fas.fa-star*4+i.fas.fa-star.empty --> */}
            </ul>
        </section>
        
        
        {/* <!-- section.hebergements>h3{Activités à Marseille}+ul>li>a>img+h4{Vieux Port} --> */}
        <section className="activites">
            <h3>Activités à Marseille</h3>
            <ul>
                <li className="full">
                    <a href="#">
                        <img src={require("./images/activites/4_small/01.jpg")} alt="" />
                        <h4>Vieux Port</h4>
                    </a>
                </li>
                <li className="mid">
                    <a href="#">
                        <img src={require("./images/activites/4_small/02.jpg")} alt="" />
                        <h4>Vieux Port</h4>
                    </a>
                </li>
                <li className="mid">
                    <a href="#">
                        <img src={require("./images/activites/4_small/03.jpg")} alt="" />
                        <h4>Vieux Port</h4>
                    </a>
                </li>
                <li className="full">
                    <a href="#">
                        <img src={require("./images/activites/4_small/04.jpg")} alt="" />
                        <h4>Vieux Port</h4>
                    </a>
                </li>
                <li className="mid">
                    <a href="#">
                        <img src={require("./images/activites/4_small/05.jpg")} alt="" />
                        <h4>Vieux Port</h4>
                    </a>
                </li>
                <li className="mid">
                    <a href="#">
                        <img src={require("./images/activites/4_small/06.jpg")} alt="" />
                        <h4>Vieux Port</h4>
                    </a>
                </li>
            </ul>
        </section>
    </main>
}