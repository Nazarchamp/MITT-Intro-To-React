import Header from './Header';
import Footer from './Footer';
import {Home, Blog, Movies, Contact} from './Views';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;
