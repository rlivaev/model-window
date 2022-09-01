import React, {useState} from 'react';
 
const ModalWindow = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(prevState =>[...prevState, event.target[0].value]);  
    
  }; 



  return(
  <div className="Modal">
    <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className="modal">
      <h1>Todo List</h1>
        <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
          <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <form onSubmit={handleSubmit}>
          <input className='input-model' placeholder='Введите задачу' type="text"/>
            <button type='submit'className = 'save-model-btn'>Сохранить</button>
        </form>
          {value.map((todo,index) =>
            <p key={index}>{index +1}. {todo}</p>
          )}
    </div>
  </div>
  </div>
    )
}
export default ModalWindow;