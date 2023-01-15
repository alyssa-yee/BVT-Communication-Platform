import React from 'react';

export default function Navbar(){
    return(
        <div class = "navdiv">
            <nav>
                <img src = {require ('../images/DDlogo.png')} className = "nav--DD" alt ="DD logo"/>
                <ul className='list'>
                    <li><a href = "http://google.com/" >
                    <img src = {require ('../images/circle.png')} className = "servers" alt ="Server 1"/>    
                    </a></li>
                    <li><a href = "http://google.com/" >
                    <img src = {require ('../images/circle.png')} className = "servers" alt ="Server 2"/>    
                    </a></li>
                    <li><a href = "http://google.com/" >
                    <img src = {require ('../images/circle.png')} className = "servers" alt ="Server 3"/>    
                    </a></li>
                    <li><a href = "http://google.com/" >
                    <img src = {require ('../images/circle.png')} className = "servers" alt ="Server 4"/>    
                    </a></li>
                    <li><a href = "http://google.com/" >
                    <img src = {require ('../images/circle.png')} className = "servers" alt ="Server 5"/>    
                    </a></li>

                    <li classmate  = 'right-links'><a href = "http://google.com/"> Help </a></li>
                    <li classmate  = 'right-links'><a href = "http://google.com/"> Settings </a></li>
                    <li classmate  = 'right-links'><button> Log Out </button></li>
                    
                </ul>
            </nav>
        </div>
    )
}
