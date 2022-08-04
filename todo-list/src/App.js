import { useEffect, useRef, useState } from "react";
import styles from './App.module.css'


function App() {

  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = function(event){
    setToDo(event.target.value)
  };
  const onSubmit = function(event){
    event.preventDefault()
    setToDos((currentValue)=>[...currentValue, toDo])
    setToDo('')

  };

  console.log(toDos);
  return (
    <div>
      <h2>Just Do it!</h2>
      <form onSubmit={onSubmit}>
        <input
        placeholder="Today, I'm going to..."
        value={toDo}
        onChange={onChange}/>
      </form>
      <div className={styles.container}>
        {toDos.map((item, index)=>{
          const delBtn = function(index){
            setToDos((toDos)=>
              toDos.filter((_, toDos)=>
              index !== toDos
              )
            )
            
          }
          return (
            <li key={index}>{item}
            <button onClick={()=>delBtn(index)}>🗑</button>
            </li>
          )
        })
        }
      </div>
    </div>

  );
}

export default App;
