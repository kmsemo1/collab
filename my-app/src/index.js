import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class NavBar extends React.Component {
    render() {
        return (
            <nav id="main">
                <ul>
                    <li class="logo"><a>Field Trip</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Images</a></li>
                    <li><a>Login</a></li>
                    <li><a href="index.html">Register</a></li>
                </ul>
            </nav>

      );
    }
}

ReactDOM.render(
    <NavBar />,
    document.getElementById('root')
  );