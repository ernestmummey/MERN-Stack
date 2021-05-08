import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from './components/Box.jsx'
import { useState } from 'react';

function App() {
  const [ state, setState] = useState({
    selectedColor: ' '
  })
  return (

    <div className="App">
        <Box inputs = {state} setInputs = {setState} />
    </div>
  );
}

export default App;
