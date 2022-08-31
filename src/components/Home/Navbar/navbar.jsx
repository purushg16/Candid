import './navbar.css';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {


    return (
        <section id='navbar'>
            <nav className="navbar navbar-expand-lg bg-transparent" style={{ alignItems: 'baseline' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="."> Candid </a>

                    <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: 'end' }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/register'>Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id='appBar' style={{display:'none'}}>
                <div className="row">
                    <div className="col-6 login-section connect">

                        <a href='/login' style={{ color:'#FCE7B0' }}>
                            <ul style={{ listStyleType: 'none', textAlign: 'center', padding:0 }}>
                                <li> <FontAwesomeIcon icon={faUserTie} /> </li>
                                <li> <p>Login</p> </li>
                            </ul>
                        </a>

                    </div>

                    <div className="col-6 register-section connect">
                    <a href='/register' style={{ color:'#FCE7B0' }}>

                        <ul style={{ listStyleType: 'none', textAlign: 'center', padding:0  }}>
                            <li> <FontAwesomeIcon icon={faUserPlus} /> </li>
                            <div> <p>Register</p> </div>
                        </ul>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )

}