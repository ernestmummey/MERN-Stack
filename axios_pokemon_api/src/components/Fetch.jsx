import { useState } from 'react';
import axios from 'axios'

const Fetch = (props) => {
    const[pokemon, setPokemon] = useState([]);

    const buttonOnClick =()=> {
        console.log("calling API...");

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => setPokemon(res.data.results))
        
    }

    return (
        <div className="App">
            <button className=" mt-5 mb-3 btn btn-lg btn-danger " onClick = {() => buttonOnClick()}>Fetch Pokemon</button>

            <ul>
            {
                pokemon.map((item, key) =>{
                return <li key={key}>{item.name}</li>
                })
            }
            </ul>
        </div>
    );
}






export default Fetch