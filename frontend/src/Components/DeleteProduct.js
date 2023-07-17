import React from 'react'

function DeleteProduct() {
  return (
    <div className='container my-4'>
      <section className="page-section" id="delete-provider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="mt-0" style={{fontFamily: "fantasy", letterSpacing: '1px', wordSpacing: '2px'}}><u>Deleted Successfully!</u></h1>
              <hr className="divider my-4"/>
              <h2 className="text-white-50 mb-4" style={{fontFamily: 'initial', fontSize: '40px'}}>Product has been deleted!</h2>
            </div>
          </div>  
        </div>
      </section>
    </div>
  )
}

export default DeleteProduct
