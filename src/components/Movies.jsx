import React from 'react'
import '../style.css'
function Movies() {
   
    
  return (
    <div>
        <div className="container  " style={{marginTop:'165px'}}>
        <h3 className='text-light m-2 mt-4 mb-4  shadow' >Trending Now</h3>

            <div className="row d-flex justify-content-evenly Movies">
                <div className="col-lg-2 col-sm-12 col-md-6 mt-4"style={{cursor:"pointer"}}>
                    <img src="src\assets\assets\asset 2.webp" className='rounded MovieImg' alt=""  />
                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mt-4 "style={{cursor:"pointer"}}>
                   <img  src="src\assets\assets\asset 3.webp" className='rounded MovieImg' alt=""  />

                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mt-4"style={{cursor:"pointer"}}>
                <img  src="src\assets\assets\asset 4.webp" className='rounded MovieImg' alt="" />

                </div>
                <div className="col-lg-2 col-sm-12 col-md-6 mt-4"style={{cursor:"pointer"}}>
                <img src="src\assets\assets\asset 5.webp" className='rounded MovieImg' alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Movies
