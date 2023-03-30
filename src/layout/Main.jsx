import React, { useEffect, useState } from 'react';
import { Cards } from '../components/Cards';
import { Search } from '../components/Search';
import { Modal } from '../components/Modal';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [movieData, setMovieData] = useState({});

    const getFullData = (id) => {
        setMovieData({});

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
            .then((response) => response.json())
            .then((data) => setMovieData(data));
    };

    const fetchData = (movieName, type = '') => {
        setMovies([]);

        const validMovieName = movieName.replace(' ', '+');

        fetch(
            `https://www.omdbapi.com/?apikey=833af6fa&s=${validMovieName}&type=${type}`
        )
            .then((response) => response.json())
            .then((data) => setMovies(data.Search));
    };

    useEffect(() => {
        fetchData('furious');
    }, []);

    return (
        <main className='container content'>
            <Search callback={fetchData} />
            <Modal
                active={modalActive}
                setActive={setModalActive}
                data={movieData}
            />
            {movies ? (
                movies.length ? (
                    <Cards
                        movies={movies}
                        setModalActive={setModalActive}
                        getFullData={getFullData}
                    />
                ) : (
                    <Preloader />
                )
            ) : (
                <h5>0 results found</h5>
            )}
        </main>
    );
}

export { Main };
