import React from 'react'
import '../style.css'

function Content() {
  return (
    <div >
      
        <div style={{marginTop:'100px'}} className='para fw-bold text-center text-light '>Unlimited movies, TV</div>
        <div className='para fw-bold text-center text-light' >shows and more</div>
        <p className=' text-center text-light fw-bold  para1'>Starts at ₹149.Cancel at any time.</p>
        <p className=' text-center text-light  para2 ' >Ready to watch?Enter your email to create or restart your membership.</p>
        <div className=' d-lg-flex justify-content-around  align-items-center content'>
            <input className='bg-transparent border p-3 fs-5 text-light rounded ContentInput' placeholder='Email address' type="text"  />
            <button className='btn btn-danger p-3 fw-bold  ContentBtn' >Get Started ></button>
        </div>
    </div>
  )
}

export default Content
