import '../styles/button.css';

function Button(props) {
    return(
        <button className={props.type}>{props.content}</button>
    );
}

export default Button;