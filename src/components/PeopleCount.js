import React from 'react';

const PeopleCount = (props) => {
    console.log('People count')
    return (
            <h2 className="text-center mt-4">{props.peopleCount}</h2>
    );
}

export default PeopleCount;