import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState(" ")
  const [list, setList] = useState([
  ])
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);

      setList([...list, form]);

      setForm("");

    }


  const onDeleteHandler = (index) => {
      setList([...list.slice(0, index), ...list.slice(index+1)])
  }


  return (
    <div className="App">
      <h2 className="border-bottom mt-2">Todo List</h2>
        <form onSubmit = {onSubmitHandler} >
          <div className="d-flex justify-content-center mt-5">
            <div className="form-floating col-md-5">
                <input type="text" onChange={ (e) => setForm(e.target.value)} className="form-control form-control-lg" value ={form} placeholder="todo list"/>
            </div>
              <div className="">
                <button type="submit" className="btn btn-lg btn-info">Add</button>
              </div>
          </div>
        </form>
        <div className = "mt-5">
          {
            list.map((input, index) => {
              return( 
                <div> 
                  <div className= "d-flex justify-content-center">
                    <div>
                      <input className ="form-check-input" type="checkbox" />
                    </div>
                    <h4>{input}</h4>
                    <div className="mx-5">
                      <button type="submit" onClick = {(event) => onDeleteHandler(index)}  className="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
// className={ props.label.selected ? " nav-link active" : "nav-link" } onClick = {(event) => props.onClickHandler(event, props.index)}
// onClick = {(event) => onDeleteHandler(event)}