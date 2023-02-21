import '../styles/header.css'

const menuContent = ['Home', 'About', 'Content'];
const listItems = menuContent.map((name) => (<li><a>{name}</a></li>));

function Header() {
    return (
        <header>
            <h1><a href="#">Assignment 2</a></h1>
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>
        </header>
    );
}

export default Header;