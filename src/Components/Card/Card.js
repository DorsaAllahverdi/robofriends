import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='pa2 dib grow ma2 relative ba b--black-20 mw5 bg-light-green br4'>
            <img  className="db" alt='' src={`https://robohash.org/${id}?set=set3`} width='200px' height='200px' />
            <div>
                <p className="f6 db dark-blue">{name}</p> 
                <p className="f6 gray mv1">{email}</p>
            </div>
        </div>
    );
  }

export default Card;