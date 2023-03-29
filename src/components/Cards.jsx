import { Card } from './Card';

function Cards(props) {
    const { movies, setModalActive, getFullData } = props;

    return (
        <div className='cards-container'>
            {movies.map((elem) => (
                <Card
                    key={elem.imdbID}
                    {...elem}
                    setModalActive={setModalActive}
                    getFullData={getFullData}
                />
            ))}
            ;
        </div>
    );
}

export { Cards };
