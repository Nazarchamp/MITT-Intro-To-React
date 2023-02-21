import Button from "./Button";
import '../styles/banner.css';

function Banner(props) {
    return (
        <div className='banner'>
            <div className='inner-banner'>
                <h1>{props.heading}</h1>
                <p>
                    {props.content}
                </p>
                <div className="banner-button-container">
                    <Button type="secondary" content="Secondary"/>
                    <Button type="primary" content="Primary"/>
                </div>
            </div>
        </div>
    );
}

export default Banner;