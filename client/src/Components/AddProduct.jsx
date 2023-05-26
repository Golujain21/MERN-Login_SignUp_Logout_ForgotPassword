import React, { useState } from 'react'

const AddProduct = () => {
  const [state, setState] = useState({
    title: "",
    price: "",
    description:"",
    category:"",
    image: "",  
    userId:""
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId)
    console.log(state);
    const {title, price, description,category ,image } = state;
        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ title, price, description, category ,image ,userId}),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);   
        
        // localStorage.setItem("user", JSON.stringify(result.result))
        // localStorage.setItem("token", JSON.stringify(result.auth))
        // if(result){
        //     navigate('/')
           
        // }
  };
  return (
    <section className="addproduct_block">
    <form onSubmit={handleSubmit}>
      <h3 className='text-center mb-4'>ADD PRODUCT</h3>
      <div className="form-outline mb-4">
        <input 
          className='form-control'
          type="text"
          name="title"
          value={state.title}
          onChange={handleInputChange}
          placeholder="Product Title"
        />
      </div>
      <div className="form-outline mb-4">
        <input
          className='form-control'
          type="number"
          name="price"
          value={state.price}
          onChange={handleInputChange}
          placeholder="Product price"
        />
      </div>
      <div className="form-outline mb-4">
        <input
          className='form-control'
          type="text"
          name="description"
          value={state.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
      </div>
      <div className="form-outline mb-4">
      <input
        className='form-control'
        type="text"
        name="category"
        value={state.category}
        onChange={handleInputChange}
        placeholder="Product Category"

      />
    </div>
      <div className="form-control">
        <input
          className='form-control'
          type="file"
          name="image"
          value={state.image}
          onChange={handleInputChange}
          placeholder="Add Product Image"
        />
      </div>
      
      <button type="submit" className='btn btn-primary btn-block px-lg-5 mt-4'>Add Product</button>
    </form>
  </section>
  )
}

export default AddProduct