import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Create from './components/Create';
import Box from './components/Box';

function App() {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [boxArray, setBoxArray] = useState([]);

  return (
    <div className="App">
        <Header />
        <Create  boxArray={boxArray} setBoxArray={setBoxArray} />
        <div className="allcards">
        {boxArray.map((color, index) => {
            return <Box 
              key={index} 
              color={color} 
              index={index}
              boxArray={boxArray}
              setBoxArray={setBoxArray}
              size={size}
              setSize={setSize}
              />
          })}
        </div>

    </div>
  );
}

export default App;
