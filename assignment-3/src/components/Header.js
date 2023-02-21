import '../styles/header.css'
import {NavLink} from "react-router-dom";

const menuContent = ['Home', 'Blog', 'Movies', 'Contact'];
const listItems = menuContent.map((name) => (<li><NavLink to={name === 'Home'? '/' : '/'+name.toLowerCase()}>{name}</NavLink></li>));

function Header() {
    return (
        <header>
            <h1><a href="#">Editing Company</a></h1>
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>
        </header>
    );
}

export default Header;