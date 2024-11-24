import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container mt-5">
        <p className='text-center text-light mt-4'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="row ">
          <div className="col-lg-8">
          <input className='bg-transparent border p-3 fs-5 text-light rounded FooterInput ' placeholder='Email address' type="text"  />

          </div>
          <div className="col-lg-4">
          <button className='btn btn-danger p-3 fw-bold  FooterBtn' >Get Started > </button>

          </div>
        </div>

       <p className='text-light mt-5 para1'>
       Questions? Call <a href="#"className='text-light' >000-800-919-1694</a>
        </p>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <ul className='list'>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Speed Test</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <ul className='list'>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#"> Legal Notices</a></li>
            </ul>
            
          </div>
          <div className="col-lg-3 col-sm-6">
            <ul className='list'>
              <li><a href="#">Account</a></li>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Only on Netflix</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6">
            <ul className='list'>
              <li><a href="#">Media Centre</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className='mt-5 footer-btn '>
        <button className='btn  me-2 border  text-light ps-3 pe-3'><img src="src\assets\assets\asset 15.svg" alt="" className='' />English <img src="src\assets\assets\asset 16.svg" alt="" /></button>
        <p className='mt-2 text-light'style={{opacity:".5"}}>Netflix India</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
