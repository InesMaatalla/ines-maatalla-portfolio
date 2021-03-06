import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Portfolio from "../../images/portfolio.png"
import Papelitos from "../../images/papelitos.png"
import Partybus from "../../images/partybus.png"
import MonsterRolodex from "../../images/monster-rolodex.png"
import CrownClothing from "../../images/crown-clothing.png"


function Cards() {
  return (
    <div className='cards'>
      <h1 className="project">[Projects]</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={CrownClothing}
              text='Builded an E-commerce app with React, Redux, Hooks, GraphQL, ContextAPI, Stripe and Firebase.'
              label='CRWN Clothing'
              path='https://king-ecommerce.herokuapp.com/'
            />
            <CardItem
              src={MonsterRolodex}
              text='Search monsters with React. Try it !'
              label='Monsters Rolodex'
              path='https://inesmaatalla.github.io/monster-rolodex/'
            />
            </ul>  
            <ul className='cards__items'>
            <CardItem
              src={Portfolio}
              text='Explore my portfolio, designed on Figma and coded with Gatsby.'
              label='Portfolio'
              path='https://www.inesmaatalla.com'
            />
            <CardItem
              src={Papelitos}
              text='A multiplayer app that will manage everybody’s papelitos: team delegation, score, timer and rounds. Using Ruby on Rails.'
              label='Papelitos'
              path='http://www.papelitos.fun/users/sign_in'
            />
            <CardItem
              src={Partybus}
              text='Coded a clone of Airbnb. Using Ruby on Rails and the worflow Heroku.'
              label='Partybus'
              path='https://airbnb-clone-partybus.herokuapp.com'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;