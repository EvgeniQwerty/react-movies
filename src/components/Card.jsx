function Card(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
        setModalActive,
        getFullData,
    } = props;

    return (
        <div
            className='card movie'
            id={id}
            onClick={() => {
                getFullData(id);
                setModalActive(true);
            }}
        >
            <div className='card-image'>
                <img src={poster} alt={title} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{title}</span>
                <p>Year: {year}</p>
                <p>Type: {type}</p>
            </div>
        </div>
    );
}

export { Card };
