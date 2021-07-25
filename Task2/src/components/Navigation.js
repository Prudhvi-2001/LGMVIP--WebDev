import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';
var more={
}
const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
               
                <nav className='navbar'>
                                      

                    <h3 className="logo" >Let's Growmore</h3>
                    <div className='nav-links'>
                    <button className='btn btn-outline-primary btn-lg'>Home</button>
                        <button  onClick={onButtonSubmit} color="" className="btn btn-outline-primary btn-lg">
                            Get Users
                        </button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
