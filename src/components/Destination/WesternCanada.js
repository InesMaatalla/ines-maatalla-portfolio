import React from 'react';
import './WesternCanada.css';





function Destination() {

    return (
      <div className="wc-container">
      <h1>WESTERN CANADA</h1>
        <div className="video-body">
          <iframe width="854" height="480" src="https://www.youtube.com/embed/1h1vmPuOv-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>               
        </div>
        <div className="wc-body">
          
          <p>Here is the itinerary:</p>
          <ul className="list">
          <ul>- Montréal, QC</ul>
          <ul>- Mont-Riding National Park, MB</ul>
          <ul>- Prince Albert National Park, SK</ul>
          <ul>- Calgary, AB</ul>
          <ul>- Banff, AB</ul>
          <ul>- Jasper, AB</ul>
          <ul>- Whistler, BC</ul>
          <ul>- Vancouver, BC</ul>
          </ul>
          <br/>
          <p> Want to join me on my next TRIP? Stay connected and I will let you know my future trips! </p>
          
        </div>
        </div>
  );
}

export default Destination;