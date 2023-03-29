import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super();

        this.cb = props.callback;

        this.state = {
            search: '',
            type: '',
        };
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleCbChange = (event) => {
        console.log(event.target.value);
        this.setState({ type: event.target.value }, () =>
            this.cb(this.state.search, this.state.type)
        );
    };

    render() {
        console.log(this.state.search);
        return (
            <div className='search-container'>
                <div className='search-bar-wrapper'>
                    <input
                        placeholder='Movie'
                        className='validate'
                        type='search'
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter')
                                this.cb(this.state.search, this.state.type);
                        }}
                    ></input>
                    <button
                        className='btn'
                        onClick={() =>
                            this.cb(this.state.search, this.state.type)
                        }
                    >
                        Search
                    </button>
                </div>

                <div className='radio-wrapper'>
                    <div className='radio-elem'>
                        <label>
                            <input
                                name='all'
                                id='all'
                                value=''
                                checked={this.state.type === ''}
                                onChange={this.handleCbChange}
                                type='radio'
                            />
                            <span>All</span>
                        </label>
                    </div>
                    <div className='radio-elem'>
                        <label>
                            <input
                                name='movie'
                                id='movie'
                                value='movie'
                                checked={this.state.type === 'movie'}
                                onChange={this.handleCbChange}
                                type='radio'
                            />
                            <span>Movie</span>
                        </label>
                    </div>
                    <div className='radio-elem'>
                        <label>
                            <input
                                name='series'
                                id='series'
                                value='series'
                                checked={this.state.type === 'series'}
                                onChange={this.handleCbChange}
                                type='radio'
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
