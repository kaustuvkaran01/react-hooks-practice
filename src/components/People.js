import React,{useState} from 'react';

const People = ({people}) => {
    return(
        <div className="col">
            <h2>People:</h2>
            <hr /> 
            {people.map((p) => (
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