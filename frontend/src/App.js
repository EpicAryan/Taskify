import ToDo from "./components/ToDo";
import {useState , useEffect} from 'react';
import {getAllToDo, addToDo, updateToDo, deleteToDo} from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isupdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");


  useEffect(() => {
    getAllToDo(setToDo);
  },[]);
  
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TASKIFY App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos..." value={text} onChange={(e) => setText(e.target.value)}/>

          <div className="add" onClick={ isupdating ? () => updateToDo( toDoId, text, setToDo, setText, setIsUpdating) 
            : () => addToDo(text, setText, setToDo)}>
            {isupdating ? "Update" : "Add" }
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text} 
          updateMode = {() => updateMode(item._id, item.text)}
          deleteTodo={() => deleteToDo(item._id,setToDo)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
