import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[pokemon, setPokemon] = useState([]);

  const buttonOnClick =()=> {
    console.log("calling API...");

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
  }

  return (
    <div>
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

export default App;
