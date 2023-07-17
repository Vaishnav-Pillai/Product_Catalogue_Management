import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProduct(props) {

  const navigate = useNavigate();

  let [name,setName] = useState('');
  let [description,setDescription] = useState('');
  let [tagline,setTagline] = useState('');
  let [price,setPrice] = useState('');
  let [fileName,setFileName] = useState('');
  let [source,setSource] = useState('');
  var id = props.id;

  const uploadUrl = "http://localhost:3000/api/products";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    const formData = new FormData();

    formData.append("name",name);
    formData.append("description",description);
    formData.append("tagline",tagline);
    formData.append("price",price);
    formData.append("articleImage",fileName);
    formData.append("source",source);
    formData.append("id",id);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.response);
        handleNext();
      }
    }
    
    xhr.open("POST", uploadUrl);
    xhr.send(formData);
  }

  function handleNext(){
    props.setHome(true);
    navigate("/");
  }

  return (
    <div className='container my-3'  style={{width: '70%'}}>
      <section className="page-section" id="register">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0" style={{fontFamily: 'fantasy', letterSpacing: '1px', wordSpacing: '2px'}}><u>Add Product</u></h2>
                <hr className="divider my-4"/>
              </div>
            </div>
            <div className="row justify-content-center">
                <div className="row o-hidden border-0">
                  <div className="col-lg-12">
                    <div>
                      <form className="user my-2" encType='multipart/form-data'>
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" className="form-control form-control-user" name="name" id="inputName" placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
                          </div>
                          <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user" name="description" id="inputDescription" onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
                          </div>
                        </div>
                        <div className="form-group my-3">
                          <input type="text" className="form-control form-control-user" name="tagline" id="inputTagline" placeholder="TagLine" onChange={(e) => setTagline(e.target.value)} required/>
                        </div>
                        <div className="form-group my-3">
                          <input type="text" className="form-control form-control-user" name="price" id="inputPrice" placeholder="Price" onChange={(e) => setPrice(e.target.value)} required/>
                        </div>
                        <div className="form-group my-3">
                          <input type="file" className="form-control form-control-user" filename="articleImage" id="inputPhoto" placeholder="Photo" onChange={(e) => setFileName(e.target.files[0])} required/>
                        </div>
                        <div className="form-group my-3">
                          <input type="text" className="form-control form-control-user" name="source" id="inputSource" placeholder="Source" onChange={(e) => setSource(e.target.value)} required/>
                        </div>
                        <div className='text-center my-3'>
                          <button className="btn btn-outline-light" type="submit" onClick={handleSubmit}>Add Product</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AddProduct
