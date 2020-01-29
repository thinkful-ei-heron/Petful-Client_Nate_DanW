import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../images/homeImage.jpg';

export default function HomePage(props) {
  return (
    <>
      <img src={homeImage} alt="cute puppy"></img>
      <p>
        At the Petful adoption center we only put up one pet for adoption at a time, namely whichever pet has
        been at the adoption center the longest amount of time. If you would like to get in line to adopt a
        pet just press the 'Adopt Now' button below.
      </p>
      <Link to="/adopt">
        <button>Adopt Now</button>
      </Link>
    </>
  );
}
