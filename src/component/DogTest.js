import React, {useState}  from 'react';
import dogNames from 'dog-names';
import List from './DogList'
var dogInfo = [];
const DogTest = () =>{
    const [imageURL, setImageURL] = useState('');
    const getImageURL = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImageURL(data))
    }
    var id = Date.now();
    var name = dogNames.allRandom();
    var url = imageURL.message
    var date = new Date(id).getDate();
    var month = new Date(id).getMonth();
    var year = new Date(id).getFullYear();
    var defaultURL = "https://images.dog.ceo/breeds/terrier-norwich/n02094258_2870.jpg"
    const setDefaultVal = (value, defaultValue)=>{
        return (value === undefined) ? defaultValue : value;
     };
    var src = setDefaultVal(url, defaultURL);  
    const getDogInfo = () =>{
            dogInfo.push({name:name, url:src, id:id, date:date, month:month, year:year});
     };
return (
    <div>
    <img src={src} alt="" className="ImageTitle" />
    <h3 className="SubTitle">{name}</h3>
    <div className="TotalButton">
        <button onClick={getImageURL} className="Dislike"></button>
        <button onClick={() => {getDogInfo(); getImageURL();}} className="Like" type="button"></button>
    </div>
    <List dogInfo={dogInfo}/>
    </div>
    );
};

export default DogTest;