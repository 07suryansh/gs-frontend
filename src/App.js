import './App.css';
import Completed from './Components/Completed';
import Pending from './Components/Pending';
import Progress from './Components/Progress';
import { useState } from 'react';

function App() {
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App">
    <div className='heading'>Dynamic Task List</div>
      <div className="tasks">
        <Pending submit={submit} setSubmit={setSubmit}/>
        <Progress submit={submit} setSubmit={setSubmit}/>
        <Completed submit={submit} setSubmit={setSubmit}/>
      </div>
    </div>
  );
}

export default App;
