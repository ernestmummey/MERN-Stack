import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    render(){
        const { firstname, lastname, haircolor } = this.props;
        const click = () => this.setState({age: this.state.age + 1})
        return(
            <div> 
                <h1>
                    <h1> {lastname}, {firstname} </h1>
                    <p>Age:{this.state.age}</p>
                    <p> Hair Color: {haircolor}</p>
                </h1>
                    <button onClick = {click}> Birthday Button for {firstname} {lastname}</button>
            </div>
        )
    }
}

export default Card;