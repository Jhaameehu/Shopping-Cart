import React, { Component } from 'react';
import Menu from './svg/menu.svg';
import Close from './svg/close.svg';
import CartIcon from './svg/shopping-cart.svg';
import {Link} from 'react-router-dom';
import './css/Header.css';
import {DataContext} from './Context';;


export class Header extends Component {
    static contextType = DataContext

    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle} = this.state;
        const {cart} = this.context
        return (
           <header>
               <div className="menu" onClick={this.menuToggle}>
                   <img src={Menu} alt="" width='20'/>
               </div>
               <div className='logo'>
                   <h1><Link to='/product'>Store</Link></h1>
               </div>
               <nav>
                   <ul className={toggle ? 'toggle' : ''}>
                       <li><Link to='/product'>Home</Link></li>
                       <li><Link to='/product'>Product</Link></li>
                       {/* <li><Link to='/contract'>Contact</Link></li> */}
                       {/* <li><Link to='/about'>About</Link></li> */}
                       <li><Link to='/login'>Login / Register</Link></li>
                       <li className='close' onClick={this.menuToggle}>
                            <img src={Close} alt="" width='20' />
                       </li>
                   </ul>
                   <div className="menu-cart">
                       <span>{cart.length}</span>
                       <Link to='/cart'>
                            <img src={CartIcon} alt="" width='20' />
                       </Link>
                   </div>
               </nav>
           </header>
        )
    }
}

export default Header;
