import React from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css';


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav id="main">
                    <ul>
                        {/* <li><img src="./images/hamburger_icon.png" alt="hamburger menu"/></li> 
                         npm install for the hamburger menu https://www.npmjs.com/package/react-drawer   */}
                        <li class="logo"><a href="#">Field Trip</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Images</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="index.html">Register</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

ReactDOM.render(
    <NavBar />,
    document.getElementById('root')
);