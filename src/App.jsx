import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    console.log(copyTask)

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  

  return (
    <div className='min-h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start flex-col gap-4 p-10'>
        <h1 className='text-3xl font-bold text-white'>Add Notes</h1>

        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 w-full border-2 rounded-2xl outline-none font-medium'
        value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}/>

        <textarea placeholder='Enter Details' className='px-5 py-2 h-32 w-full  border-2 rounded-2xl outline-none font-medium'
        value={details} onChange={(e)=>{
          setDetails(e.target.value);
        }}
        ></textarea>
        
        <button className='bg-white text-black rounded-2xl px-5 py-2 w-full outline-none font-medium border-amber-50 active:scale-95'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold text-white'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto hide-scrollbar'>
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-42 overflow-auto shadow break-words bg-cover bg-yellow-100 text-black p-4 px-5 rounded-2xl'>
              <div>
                <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
                <p className='mt-2 mb-2 text-sm leading-tight font-medium text-gray-700'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx);
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
