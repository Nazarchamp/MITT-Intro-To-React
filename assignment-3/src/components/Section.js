import '../styles/section.css';

function Section(props){
    return(
      <div className='section'>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
      </div>
    );
}

export default Section;