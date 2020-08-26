import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({search,onChange}) => {
    return <div className="search">
        <input onChange={onChange} value={search}/>
        <span className="icon"><BsSearch></BsSearch></span>
    </div>
}

export default Search;