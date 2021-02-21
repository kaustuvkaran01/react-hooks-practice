import React,{useContext} from 'react';
import peopleContext from '../context/peopleContext';

const PeopleCount = () => {
    console.log('People count')
    const context = useContext(peopleContext);
    const peopleCount = context.people.length;
    return (
            <h2 className="text-center mt-4">{peopleCount}</h2>
    );
}

export default PeopleCount;