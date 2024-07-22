import React from 'react';

const Searchbar = ({onInputChange}) => {
    return (
        <div className='f4'>
            <input className='b--light-blue bg-lightest-blue pa3 br3' type="Search" id="filter" placeholder="Search Robots" onChange={onInputChange} />
        </div>
    );
  }

export default Searchbar;