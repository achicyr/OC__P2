export default function App(){
    // const [state, setState] = useState()
    // useEffect(function(){
        
    //     return ()=>{}
    // }, [])
    // useLayoutEffect(function(){
        
    // }, [])
        
    return <header>
        <picture>
            <img src="./assets/images/logo/Booki@3x.png" alt="logo booki" />
            <source srcSet="./assets/images/logo/Booki.png" media="(min-width:992px)" />
        </picture>
        <menu>
            <li className="active"><a href="">Hébergements</a></li>
            <li><a href="">Activités</a></li>
        </menu>
    </header>
}