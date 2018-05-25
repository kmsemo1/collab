import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav id="main">
                    <ul>
                        <li><img src="./images/hamburger_icon.png" alt="hamburger menu"/></li>
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