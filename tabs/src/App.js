import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './components/Message'
import { useState } from 'react';



function App() {
const [tabs, setTabs] = useState([
  {tab: "tab1", content: "Does this box actually work", selected: false },
  {tab: "tab2", content: "Please let me understand react", selected: false },
  {tab: "tab3", content: "This is the hardest front end I had to deal with", selected: false }
])

const onClickHandler = (event, index) => {
  tabs.map((label, i) => {
    let t = label
    if(i === index){
      t.selected = true;
    }
    else{
      t.selected = false;
    }
    return setTabs([...tabs.slice(0,i),t,...tabs.slice(i+1)]);
  })
}

  return (
    <div className="App">
      <Message onClickHandler = {onClickHandler} tabs={tabs}/>
    </div>
  );
}

export default App;


