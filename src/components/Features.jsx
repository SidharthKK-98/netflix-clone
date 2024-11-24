import React from 'react'

function Features() {
  return (
    
    <div className='container'>
        <h3 className='text-light m-2 mt-5 mb-4  shadow '>More reasons to join</h3>

       <div className="row mt-5 container d-flex justify-content-around ">

          <div className="col-lg-3 rounded col-sm-12 col-md-6 mt-4 p-3  " >
            <div className='p-3 rounded' style={{backgroundColor:'#091057',height:"300px"}}>
            <h4 className='text-light'>Enjoy on your Tv</h4>
            <p style={{color:'white',opacity:'.7'}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            <img src="src\assets\assets\asset 18.svg" alt="" />
            </div>
          
          </div>

          
          <div className="col-lg-3 col-sm-12 col-md-6  mt-4 pt-3 " >
            <div className='p-3 rounded ' style={{backgroundColor:'#091057',height:"300px"}}>
                <h4 className='text-light'>Download your shows to watch offline</h4>
                <p style={{color:'white',opacity:'.7'}}>Save your favourites easily and always have something to watch.</p>
                <img src="src\assets\assets\asset 19.svg" alt="" />
            </div>
            
          </div>
         

          
          <div className="col-lg-3 col-sm-12 col-md-6 rounded mt-4 p-3" >
            <div className='p-3 rounded' style={{backgroundColor:'#091057',height:"300px"}}>
                <h4 className='text-light'>Watch everywhere</h4>
                <p style={{color:'white',opacity:'.7'}}>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                <img src="src\assets\assets\asset 20.svg" alt="" />
            </div>
            
          </div>
         

          
            <div className="col-lg-3 col-sm-12 col-md-6 rounded mt-4 p-3" >
              <div className='p-3 rounded' style={{backgroundColor:'#091057',height:"300px"}}>
                  <h4 className='text-light'>Create profiles for kids</h4>
                <p style={{color:'white',opacity:'.7'}}>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                <img  src="src\assets\assets\asset 21.svg" alt="" />
              </div>
            
          </div>
          
       </div>
    </div>
  )
}

export default Features
