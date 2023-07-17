import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProductsList(props) {

  var id;

  const navigate = useNavigate();

  let [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  })

  function handleDelete(){
    fetch(`http://localhost:3000/api/products/${id}`,{
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/deleteProduct");
      });
  } 

  return (
    <div className="container my-3" style={{display: props.home===false?'none':'block'}}>
        <h2 className="text-center" style={{fontFamily: 'fantasy', letterSpacing: '1px', wordSpacing: '2px'}}><u>Products Present</u></h2>
        <hr className="divider" />
        <Link to="/addProduct" className="btn btn-outline-light btn-sm my-2 mx-2">Add A New Product</Link>
        <div className="row my-3">

        {posts.map((element,key) => (

          <div className="col-md-4">
            <div className="my-3">
              <div className="card" style={{borderRadius: '15px'}}>
                <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right:'0'}}>
                  <span className="badge rounded-pill bg-dark" style={{fontSize: '15px'}}>
                    {element.source}
                  </span>
                </div>
                <img src={`./uploads/${element.articleImage}`} className="card-img-top" style={{height: '180px'}} alt="..."/>
                <div className="card-body my-2">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.description}</p>
                    <p className="card-text"><small className="text-muted">{element.tagline}</small></p>
                    <p className="card-text">Price: &#8377;{element.price}</p>
                    <div><Link to="/productDetails" className="btn btn-sm btn-dark" style={{fontSize: '12px'}}>Know More</Link></div>
                    <button onClick={() => {id=element._id;handleDelete();}} className="btn btn-sm btn-outline-danger my-3" style={{fontSize: '12px'}}>Delete Product</button>
                </div>
              </div>
            </div>
          </div>

        ))}

        </div>
    </div>
  )
}

export default ProductsList
