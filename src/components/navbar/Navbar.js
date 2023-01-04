import { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../MenuItems';

import './Navbar.css';

class Navbar extends Component {
    state = {clicked: false};
    handleClicked = () => {
        this.setState({clicked: !this.state.clicked});
    }
    render(){
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Osnat</h1>
                <div className='menu-icons' onClick={this.handleClicked}>
                    <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Link className={item.cNamme} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;