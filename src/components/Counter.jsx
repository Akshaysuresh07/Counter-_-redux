
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../counterSlice'

function Counter() {
    const [amount,setAmount]=useState(0)
  const count=   useSelector(state=>state.counterReducer.count)
  const dispatch=  useDispatch()
  const handleIncrementByAmount=()=>{
    if(amount){
        dispatch(incrementByAmount(amount))
    }
    else{
        alert('Please enter a number')
    
    }

  }
  return (
  
    <div  className='container mt-5'>
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card" style={{height:'400px',width:"500px"}} >
                <div className="card-body text-center ">
                    <h1 className='text-dark mb-5'>{count}</h1>
                    <button onClick={()=>dispatch(increment())} id="increment" className="btn btn-primary">Increment</button>
                    <button onClick={()=>dispatch(reset())} id="decrement" className="btn btn-warning ms-3 ">Reset</button>
                    <button onClick={()=>dispatch(decrement())} id="decrement" className="btn btn-danger ms-3 ">Decrement</button>
                    <div className='d-flex justify-content-between mt-5'>
                    <input onChange={e=>setAmount(e.target.value)} type="text" className="form-control" style={{height:"50px"}} id="input" placeholder="Enter a number" />
                    <button onClick={handleIncrementByAmount} id="add" className="btn btn-success ms-3" style={{height:"60px"}}>Increment counter</button>
                    </div>
                
                </div>
              

            </div>
        </div>
    </div>
</div>
  )
}

export default Counter