import React, { Component } from 'react'
import { DataContext } from '../Context'
import {Link} from 'react-router-dom'
import '../css/Details.css';
import '../css/Cart.css';


export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }


    render() {
        const {cart, increase, reduction, removeProduct, total} =this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:'center'}}>No Product selected</h2>
        }else{
        }
            return (
                <>
                {
                    cart.map(item =>(
                        <div className='details' key={item.id}>
                            <img src={item.image} alt='' />
                            <div className='box'>
                                <br/>
                                    <div className='row'>
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.category}</p>
                                    <div className = 'amount'>
                                        <button className='count'onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className='count' onClick={() => increase(item.id)}> + </button>
                                    </div>

                            </div>
                            <br/>
                            <br/>
                            <div className='delete' onClick={() => removeProduct(item.id)}>X</div>
                            
                        </div>
                    ))
                }
                <div className="total">
                    <Link to='/payment'>Payment</Link>
                    <h3>Total: ${total}</h3>
                </div>
                </>
            )
    }
    
}

export default Cart
