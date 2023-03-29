import React from 'react';
import { Cards } from '../components/Cards';
import { Search } from '../components/Search';
import { Modal } from '../components/Modal';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            modalActive: false,
            setModalActive: (modalState) => {
                this.setState({ modalActive: modalState });
                console.log(this.state.modalActive);
            },
            movieData: {},
        };
    }

    getFullData = (id) => {
        this.setState({ movieData: {} });

        fetch(`http://www.omdbapi.com/?apikey=${API_KEYgirt}=${id}&plot=full`)
            .then((response) => response.json())
            .then((data) => this.setState({ movieData: data }));
    };

    componentDidMount() {
        this.fetchData('furious');
    }

    fetchData = (movieName, type = '') => {
        this.setState({ movies: [] });

        const validMovieName = movieName.replace(' ', '+');

        fetch(
            `http://www.omdbapi.com/?apikey=833af6fa&s=${validMovieName}&type=${type}`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    render() {
        const { movies, modalActive, setModalActive } = this.state;

        return (
            <main className='container content'>
                <Search callback={this.fetchData} />
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    data={this.state.movieData}
                />
                {movies ? (
                    movies.length ? (
                        <Cards
                            movies={movies}
                            setModalActive={setModalActive}
                            getFullData={this.getFullData}
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
}

export { Main };
