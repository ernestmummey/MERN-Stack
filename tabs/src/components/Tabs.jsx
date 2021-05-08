import React from 'react';



const Tabs = (props) => {
    return(
        <div>
                <li className="nav-item">
                    <a className={ props.label.selected ? " nav-link active" : "nav-link" } onClick = {(event) => props.onClickHandler(event, props.index)} href="#">{props.label.tab}</a>
                </li>
        </div>
    )
}


export default Tabs



