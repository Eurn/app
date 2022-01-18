import './App.css';
import Button from './Button';
import Image from './Image';
import { useState } from 'react';



function App() {
  const [state, setstate] = useState({ randomSprit: "" });

  function handleClick() { 
    const seed = (Math.random() + 1).toString(36).substring(2, 7)
    setstate({randomSprit : seed})
  }
  return (
    <div className="App">
      <header className="App-header">
        <Image src={`https://avatars.dicebear.com/api/adventurer-neutral/${state.randomSprit}.svg`} alt="image test" height={200} width={200}/>
        <Button name="Ceci est un bouton" click={()=>handleClick()}/>
      </header>
    </div>
  );
}


export default App;
