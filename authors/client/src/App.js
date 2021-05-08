import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router'
import ViewRoutes from './view/ViewRoutes.jsx'
import NewAuthors from './view/NewAuthors'
import EditAuthors from './view/EditAuthors';

function App() {
  return (
    <div className="App">
      <Router>
        <ViewRoutes path = "/" />
        <EditAuthors path = "/api/authors/update/:id"/>
        <NewAuthors path = "/api/authors/new"/>
      </Router>
    </div>
  );
}

export default App;
