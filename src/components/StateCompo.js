/**
 * @author Marc
 * Lisence
 * Premier composant state react
 */

 import React, { Component } from 'react';
 import './StateCompo.css';

 class StateCompo extends Component {
    
    constructor(props) {
        super(props);
        console.log(props.name);
        this.state = {nom: ''};
        //this.handleChange = this.handleChange.bind(this);
    }
    
    /*handleChange(e) {
        this.setState({ nom : 'Hello World '});
    }*/

    handleChange = (e) => this.setState({ nom : e.target.value });

    render() {
        return(
            <div>
                <h3 className="state-h3">Compo State { this.props.name }</h3>
                <input type="text" value={this.state.nom} onChange = { this.handleChange/*.bind(this)*/}/>
            </div>
        )
    }
 }

 export default StateCompo;