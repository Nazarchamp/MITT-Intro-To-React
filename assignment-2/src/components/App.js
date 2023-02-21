import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Gallery from "./Gallery";

function App() {
    return (
        <div className='main'>
            <Header/>
            <Banner heading="Be Creative" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum faucibus orci, ultrices
                    ultricies sem placerat et. Ut pulvinar elit eu placerat gravida. Praesent eget dui augue. Duis
                    sollicitudin cursus tellus, lacinia rhoncus turpis rutrum feugiat."/>
            <Gallery
                urls={['https://image.tmdb.org/t/p/w500//zhLKlUaF1SEpO58ppHIAyENkwgw.jpg', 'https://image.tmdb.org/t/p/w500//odQ902qHzB4B7ltLrIzDa6hCl9U.jpg', 'https://image.tmdb.org/t/p/w500//yp8vEZflGynlEylxEesbYasc06i.jpg', 'https://image.tmdb.org/t/p/w500//wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg']}/>
            <Footer/>
        </div>
    );
}

export default App;
