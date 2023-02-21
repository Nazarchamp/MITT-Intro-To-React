import '../styles/gallery.css';

function Gallery(props) {
    const movieFrames = props.urls.map((url) => (<img src={url} className='test'/>));

    return (
        <div className = "gallery">
            <div className="inner-gallery">
                {movieFrames}
            </div>
        </div>
    );
}

export default Gallery;