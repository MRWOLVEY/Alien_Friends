import './card.css';
import { useState,useEffect } from 'react';

export default function Card(props){
    const [name,setName] = useState('lol');
    const [pic, setPic] = useState('lol');
    const [email, setEmail] = useState('lol!');

    // const data = props.data;
    // console.log(data);
    const setdata = (data) =>{
        setName(`${data.name.split(' ')[0]}`+' '+`${data.name.split(' ')[1]}`);
        setPic(`https://robohash.org/${data.name}?set=set2&size=200x200`);
        setEmail(`${data.email_u.split('.')[0]}`+'@'+`${data.email_d}`);
    }

    setdata(props.data);

    return(
        <div className="bg-light-blue tc wfc ba br3 pa3 ma2 grow bw2 shadow">
            <img src={pic} alt="robot" />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}