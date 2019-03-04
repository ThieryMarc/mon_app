/**
 * @author Marc
 * Lisence
 * Premier composant pure react
 */

 import React from 'react';
 import './PureCompo.css';


export function PureCompo() {
    return(
        <div>
            <h3 className="pure-h3">Pure composant react</h3>
        </div>
    )
}

export function PureCompoProps({label, age}){
    return(
        <div>
            <h3 className="pure-h3">Pure composant props react {label} {age}</h3>
        </div>
    )
}

//export default PureCompo;