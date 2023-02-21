import '../styles/article.css'

function Article(props) {
    const paragraphList = props.paragraphs.map((paragraph) => (<p className="article-p">{paragraph}</p>));

    return (
        <div className="totalContainer">
            <div className='article-container'>
                <div>
                    <h2 className="heading">{props.title}</h2>
                    <h3 className="date">{props.date}</h3>
                </div>
                <article>
                    {paragraphList}
                </article>
            </div>
        </div>);
}

export default Article;