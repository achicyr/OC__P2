import _ from "underscore";

export default function Section__li(/*{img,title,subtitle,stars} POUR QUAND J'UTILISERAI LE HOOK CONTEXTE*/){
    const datas = {
        img: "assets/images/hebergements/4_small/annie-spratt-Eg1qcIitAuA-unsplash.jpg",
        title: "Hôtel la Cannebière",
        subtitle: "Nuit à partir de 25€",
        stars: 4
    }
    const {img,title,subtitle,stars} = datas



    return <li>
        <a href="">
            <img src={img} alt="alternatif texte" />
            <h4>{title}</h4>
            <p>{subtitle}</p>
            <div className="star">
                {_.range(stars).map((elt,i)=><i key={i} className="fas fa-star"></i>)}
                {_.range(5-stars).map((elt,i)=><i key={i} className="fas fa-star empty"></i>)}
            </div>
        </a>
    </li>
}