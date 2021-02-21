import React,{useState, useContext} from 'react';

import peopleContext from '../context/peopleContext';

const People = () => {
    const context = useContext(peopleContext);
    return(
        <div className="col">
            <h2>People:</h2>
            <hr /> 
            {context.people.map((p) => (
              <div key = {Math.random() * 1000000}>
                <p>
                  {p.firstName} {p.lastName}
                </p>
                </div>
            ))}
          </div>
    );
}

export default People;