import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { asyncdecrement, increment } from './Store/action/counterAction';

const App = () => {
  
  const dispatch=useDispatch();
  const {value} = useSelector((store) => store.counter);

  const incrementhandle=(state)=>{
    dispatch(increment(value+1));
  }
  const decrementhandle=(state)=>{
    dispatch(asyncdecrement(value-1));
}
  return (
    <>
    <div className='w-[80%] mt-10 p-5 bg-orange-500 mx-auto'>
<h1 className='mb-10 text-2xl font-semibold '>{value}</h1>
      <button  onClick={incrementhandle} className='px-3 py-2 border border-zinc-500 rounded-md mr-3'>Incretement</button>
      <button onClick={decrementhandle} className='px-3 py-2 border border-zinc-500 rounded-md'>Decrement</button>
    </div>
    </>
  )
}

export default App