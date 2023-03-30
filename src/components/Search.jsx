import { useEffect, useState } from 'react';
function Search(props) {
    const cb = props.callback;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleCbChange = (event) => {
        console.log(event.target.value);
        setType(event.target.value);
    };

    useEffect(() => {
        cb(search, type);
    }, [type]);

    return (
        <div className='search-container'>
            <div className='search-bar-wrapper'>
                <input
                    placeholder='Movie'
                    className='validate'
                    type='search'
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') cb(search, type);
                    }}
                ></input>
                <button className='btn' onClick={() => cb(search, type)}>
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
                            checked={type === ''}
                            onChange={handleCbChange}
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
                            checked={type === 'movie'}
                            onChange={handleCbChange}
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
                            checked={type === 'series'}
                            onChange={handleCbChange}
                            type='radio'
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export { Search };
