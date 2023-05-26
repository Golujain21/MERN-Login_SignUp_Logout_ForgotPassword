import React, { useEffect, useState } from 'react'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let products = await fetch("http://localhost:5000/products", {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        products = await products.json()
        // console.log(products)
        setProducts(products)
    }   
    return (
        <div className='our_service'>
            <div className="card-container container">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <h2>services</h2>
                    </div>
                </div>
                <div className='row'>
                    {
                        products.map((curElem, index) => {
                            const { title, price, description, category, image } = curElem;
                            return (
                                <div key={index} className='col-md-3 col-sm-4 col-xs-12 '>
                                    <div className="card">
                                        <img src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{description}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">{category}</li>
                                            <li className="list-group-item">${price}</li>
                                        </ul>
                                        <div className="card-body">
                                            <p className="btn btn-danger card-link">delete</p>
                                            <a  className="card-link">edit</a>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>



    )
}

export default Products