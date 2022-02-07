import React,{Component} from "react";
import _ from "underscore";
import Section__li from "./atoms/Section__li.js"

export default class Section extends Component{
    constructor(props) {
        super(props   );
        this.state = {}
    }
    componentDidMount(){}
    componentDidUpdate(){}
    shouldComponentUpdate(){}
    componentWillUnmount(){}

    handle = () => {
        alert('ok')
    }
    
    render(){
        const {modifier, className, numItems, title, link} = this.props.datas
        console.log(this.props);

        return <section className={className}>
            <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
            <ul>
                {_.range(numItems).map(elt=><Section__li key={elt} />)}
            </ul>
            {link && <a href="#" onClick={this.handle}>{link}</a>}
        </section>
    }
}