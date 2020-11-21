import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Portfolio from "../images/portfolio.png"
import Papelitos from "../images/papelitos.png"
import Partybus from "../images/partybus.png"


function Cards() {
  return (
    <div className='cards'>
      <h1 className="project">[Projects]</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Portfolio}
              text='Explore my portfolio, designed on Figma and coded with Gatsby.'
              label='Portfolio'
              path='https://www.inesmaatalla.com'
            />
            <CardItem
              src={Papelitos}
              text='A multiplayer app that will manage everybody’s papelitos: team delegation, score, timer and rounds.'
              label='Papelitos'
              path='http://www.papelitos.fun/users/sign_in'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Partybus}
              text='Coded a clone of Airbnb. Using the worflow Heroku.'
              label='Airbnb clone'
              path='https://airbnb-clone-partybus.herokuapp.com'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;