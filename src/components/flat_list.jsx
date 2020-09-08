import React from 'react';
import Flat from './flat';
// import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
const FlatList = ({
  flats, selectFlat
}) => {
  return (
    flats.map((flat) => {
      return <Flat flat={flat} name={flat.name} key={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} selectFlat={selectFlat} />;
    })
  );
};

export default FlatList;
