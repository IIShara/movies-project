function Movie (props) {
    const {
        Title: title,
        Year: year,
        Type: type,
        Poster: poster,
        imdbID: id
    } = props;
    return <div id={id} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' ? 
                        <img className="activator" src={`https://placehold.co/300x150/EEE/31343C?font=lato&text=${title}`}/>
                        :
                        <img className="activator" src={poster}/>
                    }
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
                </div>
            </div>
}

export {Movie}