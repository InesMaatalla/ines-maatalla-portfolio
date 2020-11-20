import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>[Projects]</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/portfolio.png'
              text='Explore my portfolio, designed on Figma and coded with Gatsby.'
              label='Portfolio'
              path='https://www.inesmaatalla.com'
            />
            <CardItem
              src='images/papelitos.png'
              text='A multiplayer app that will manage everybody’s papelitos: team delegation, score, timer and rounds.'
              label='Papelitos'
              path='http://www.papelitos.fun/users/sign_in'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/partybus.png'
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