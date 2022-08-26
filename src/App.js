import React from 'react';
import ModalWindow from './model-window';
import './index.scss';

function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="App">
       <ModalWindow/>
    </div>
  );
}

export default App;