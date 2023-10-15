import React,{useState,useEffect,useRef} from 'react'

function Todoform(props) {
  const [input, setinput]=useState(props.edit?props.edit.value:'');
  const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
  const handleChange=e=>{
    setinput(e.target.value);
  }
  
  const handleSubmit= e =>{
    e.preventDefault();

    props.onSubmit({
    id:Math.floor(Math.random()*10000),
     text: input
    });

    setinput('');
  };
   
return (
   <form className='todo-form' onSubmit={handleSubmit}>
    {props.edit ?(
      <>
      <input
      type='text'
      placeholder='update your todo'
      value={input}
      name='test'
      className='todo-input'
      onChange={handleChange}
      ref={inputRef}
    />
    <button className='todo-button'>update 
    todo </button>
      </>
    ):
    (
      <>
      <input
      type='text'
      placeholder='Add a todo'
      value={input}
      name='test'
      className='todo-input'
      onChange={handleChange}
      ref={inputRef}
    />
    <button className='todo-button'>Add 
    todo </button>
    </>
    )}
</form>
)
    }
export default Todoform

