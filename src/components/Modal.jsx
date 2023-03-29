function Modal(props) {
    const { active, setActive, data } = props;

    if (data)
        return (
            <div
                className={active ? 'modal-all active' : 'modal-all'}
                onClick={() => setActive(false)}
            >
                <div
                    class='modal-element'
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className='upper-wrapper'>
                        <div className='modal-img'>
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                        <div className='modal-text'>
                            <p>
                                <span class='bold'>Title</span>: {data.Title}
                            </p>
                            <p>
                                <span class='bold'>Type</span>: {data.Type}
                            </p>
                            <p>
                                <span class='bold'>Year</span>: {data.Year}
                            </p>
                            <p>
                                <span class='bold'>Rated</span>: {data.Rated}
                            </p>
                            <p>
                                <span class='bold'>Released</span>:{' '}
                                {data.Released}
                            </p>
                            <p>
                                <span class='bold'>Runtime</span>:{' '}
                                {data.Runtime}
                            </p>
                            <p>
                                <span class='bold'>Genre</span>: {data.Genre}
                            </p>
                            <p>
                                <span class='bold'>Director</span>:{' '}
                                {data.Director}
                            </p>
                            <p>
                                <span class='bold'>Writer</span>: {data.Writer}
                            </p>
                            <p>
                                <span class='bold'>Actors</span>: {data.Actors}
                            </p>
                            <p>
                                <span class='bold'>Language</span>:{' '}
                                {data.Language}
                            </p>
                            <p>
                                <span class='bold'>Country</span>:{' '}
                                {data.Country}
                            </p>
                        </div>
                    </div>

                    <div className='lower-wrapper'>
                        <p>
                            <span class='bold'>Plot</span>: {data.Plot}
                        </p>
                        <p>
                            <span class='bold'>Awards</span>: {data.Awards}
                        </p>
                        <p>
                            <span class='bold'>Metascore Rating</span>:{' '}
                            {data.Metascore}
                        </p>
                        <p>
                            <span class='bold'>IMDB Rating</span>:{' '}
                            {data.imdbRating}
                        </p>
                        <p>
                            <span class='bold'>BoxOffice</span>:{' '}
                            {data.BoxOffice}
                        </p>
                    </div>
                </div>
            </div>
        );
}

export { Modal };
