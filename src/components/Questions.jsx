import React from 'react'

function Questions() {
  return (
    <div>

      <div className="container">
        <h3 className='text-light m-2 mt-5 mb-4  shadow '>Frequently Asked Questions</h3>
        <div className="row">
          <div className="col-lg-12 ">
            <div className='d-flex justfy-content-evenly align-items-center question mt-2 'style={{width:"100%",height:"84px",cursor:"pointer"}}>
                <h4 className='ms-4 text-light' style={{width:"90%"}}>What is Netflix?</h4>
                <h4 className=' text-light fs-1 fw-light'>+</h4>
            </div>

            <div className='d-flex justfy-content-evenly align-items-center question mt-2'style={{width:"100%",height:"84px",cursor:"pointer"}}>
                <h4 className='ms-4 text-light' style={{width:"90%"}}>How much does Netflix cost?</h4>
                <h4 className=' text-light fs-1 fw-light'>+</h4>
            </div>

            <div className='d-flex justfy-content-evenly align-items-center question mt-2'style={{width:"100%",height:"84px",cursor:"pointer"}}>
                <h4 className='ms-4 text-light' style={{width:"90%"}}>Where can I watch?</h4>
                <h4 className=' text-light fs-1 fw-light'>+</h4>
            </div>

            <div className='d-flex justfy-content-evenly align-items-center question mt-2'style={{width:"100%",height:"84px",cursor:"pointer"}}>
                <h4 className='ms-4 text-light' style={{width:"90%"}}>How do I cancel?</h4>
                <h4 className=' text-light fs-1 fw-light'>+</h4>
            </div>

            <div className='d-flex justfy-content-evenly align-items-center question mt-2'style={{width:"100%",height:"84px",cursor:"pointer"}}>
                <h4 className='ms-4 text-light' style={{width:"90%"}}>What can I watch on Netflix?</h4>
                <h4 className=' text-light fs-1 fw-light'>+</h4>
            </div>

            <div className='d-flex justfy-content-evenly align-items-center question mt-2'style={{width:"100%",height:"84px",cursor:"pointer"}}>
                <h4 className='ms-4 text-light' style={{width:"90%"}}>Is Netflix good for kids?</h4>
                <h4 className=' text-light fs-1 fw-light'>+</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Questions
