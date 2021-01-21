import React from 'react';
import DogI from './DogI';
const List = ({dogInfo}) =>{
    return(
        <div>    
        <ul>
            {dogInfo.map((dogI) =>(<DogI name={dogI.name} key={dogI.id} url={dogI.url} date={dogI.date} month={dogI.month} year={dogI.year}/>) )}
        </ul>
        </div>
    );
};

export default List;