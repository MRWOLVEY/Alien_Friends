import 'tachyons';
import $ from 'jquery';
import { useState, useEffect } from 'react';
import CardList from './components/CardList/CardList.jsx';

export default function App(){


  const [cardsinfo,setCardsinfo] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const promises = [];
      for (let i = 0; i < 15; i++) {
        promises.push($.getJSON('https://api.namefake.com'));
      }
      const resolvedData = await Promise.all(promises);
      setCardsinfo(resolvedData);
    };
    fetchdata();
  }, []);
  console.log(cardsinfo.length);

  return(
    <div className=".container bg-dark-blue">
        <h1 className="tc f1 ma0 pa2">Robo Friends</h1>
        <CardList data={cardsinfo} />
    </div>
  )
}