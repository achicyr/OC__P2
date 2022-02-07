import Section from "./elements/Section.js"


export default function Main(){


    
    
    return <main>
        <Section datas={{className: "hebergements", numItems: 6, title: "Hébergements à Marsielle", link: "Afficher plus"}} />
        <Section datas={{className: "populaires", numItems: 3, title: 'Les plus populaires<i class="fas fa-chart-line"></i>'}} />
        {/* <Section datas={{modifier: "--grid", className: "activites", numItems: 6, title: "Activités à Marseille"}} /> */}
    </main>
}