import React from 'react';
import Avatar from './Avatar';

export default function Profile({image, name, title, isNew}) {
    const isBadge = isNew;
    return <div className='profile'>
                <Avatar image={image} isNew={isBadge} />
                <h1>{name}</h1>
                <p>{title}</p>
            </div>
}

