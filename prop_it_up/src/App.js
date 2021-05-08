import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx'

function App() {
  return (
    <div className="App">
            <Card var firstname = 'Jane'  lastname  = 'Doe'  age  = {45}  haircolor = 'Black'/>
            <Card var firstname = 'John'  lastname  = 'Smith'  age  = {88}  haircolor = 'Brown'/>
            <Card var firstname = 'Millard'  lastname  = 'Fillmore'  age  = {50}  haircolor = 'Brown'/>
            <Card var firstname = 'Maria'  lastname  = 'Smith'  age  = {62}  haircolor = 'Brown'/>
          <button></button>
    </div>
  );
}

export default App;
