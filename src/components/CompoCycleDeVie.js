/**
 * @author Marc
 * Lisence
 *Composant cycle de vie react
 */

import React, { Component } from 'react';
import './PureCompo.css';

class CompoCycleDeVie extends Component {

    constructor(props) {
        super(props);
        this.props = this.name;
        console.log('Je passe dans le constructor ' + props.name);
    }

    componentWillMount() {
        console.log('Je passe dans le componentWillMount ');
    }

    render(){
        console.log('Je passe dans le render ');
        return(
            <div>
            </div>
        )
    }

    componentDidMount() {
        console.log('Je passe dans le componentDidMount ');
    }

    componentWillReceiveProps(nextProps) {
        
    }

    shouldComponentUpdate() {
        console.log('Je passe dans le shouldComponentUpdate ');
    }

    componentWillUpdate() {
        console.log('Je passe dans le shouldComponentUpdate ');
    }

    componentDidUpdate() {
        console.log('Je passe dans le shouldComponentUpdate ');
    }
}

export default CompoCycleDeVie;