import './App.css';
import ConfirmationBox from './confirmationBox';
import { useState } from 'react';

function App() {

  const [first, setfirst] = useState(false)

  const handleCancel = () =>{setfirst(false)}
  const handleConfirm = () =>{setfirst(false)}
   
  return (
    <div className="App">
        <button className="modal-btn" onClick={() => setfirst(true)}>
          Open Modal
        </button>  
        {first && <ConfirmationBox handleCancel={handleCancel} handleConfirm={handleConfirm} title={"Complete the meditation?"} discription={"It looks like youte leaving the meditation session. Every completed meditation adds more peace points."} />}
    </div>
  );
}

export default App;
