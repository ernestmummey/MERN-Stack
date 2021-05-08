import React from 'react';
import Tabs from './Tabs'


const Message = (props) => {
    return (
        <div>
            <nav className ="nav nav-tabs d-flex justify-content-center mt-5">
                {
                props.tabs.map((label, key) =>{
                    return <Tabs onClickHandler = {props.onClickHandler} key ={key} index = {key} label={label}/> })
                }
            </nav>
            <div className = "border border-top-0  py-5">
            {
                props.tabs.map((message, key) => {
                    if(message.selected)
                        return <p>{message.content}</p>
                    else return <></>
                })
            }
            </div>
        </div>
    )
}
export default Message;