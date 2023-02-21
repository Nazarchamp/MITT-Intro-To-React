import Button from "./Button";
import '../styles/herobanner.css';

function Banner(props) {
    return (
        <div className='hero-banner'>
            <div className='overlay'>
                <div className="text-container">
                    <h1>{props.heading}</h1>
                    <p>
                        {props.content}
                    </p>
                    <div className="banner-button-container">
                        <Button type="primary" content="Discover"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;