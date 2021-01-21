import React from 'react';
const DogI = ({name, date, url, month, year}) => {
    return( 
        <div>
            <div className="PrintParent">
                <div><img src={url} alt="" className="ListImage"/></div>
                <div>
                <div className="ListName">{name}</div> 
                <div className="ListInfo">Petted on {date}/{month+1}/{year}</div>
                </div>
            </div>
        </div>
    );
};

export default DogI;
