import React from 'react';

export default function Navbar(){
    return(
        <div class = "navdiv">
            <nav>
                <img src = {require ('../images/whiteDDlogo.png')} className = "nav--DD" alt ="DD logo"/>
                <ul className='list'>
                    <li>
                        <a href = "http://google.com/"><button className='servers'>S1</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='servers'>S1</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='servers'>S1</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='servers'>S1</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='servers'>S1</button></a>
                    </li>

                    <li className  = 'help-settings'><a href = "http://google.com/"> Help </a></li>
                    <li className = 'help-settings'><a href = "http://google.com/"> Settings </a></li>
                    <li><button className = 'logout'> Log Out </button></li>
                    
                </ul>
            </nav>
        </div>
    )
}
