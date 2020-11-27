import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css';

export class Products extends Component {

    static contextType = DataContext;
    render() {
        const {products} = this.context;
        return (
            <div id='product'>
                {
                    products.map(product =>(
                        <div className='card' key={product.id}>
                            {/* <Link to = {`/product/${product.id}`}> */}
                                <img src={product.image} alt=''/>
                            {/* </Link> */}
                            <div className='content'>
                                <h3>{product.title}
                                    {/* <Link to ={`/product/${product.id}`}></Link> */}
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button onClick={() => this.context.addCart(product.id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products
