import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import Footer from "../components/Footer.jsx";
import CarouselItem from "../components/CarouselItem";
import useInitialState from '../hooks/useInitialState.js'
import "../assets/styles/App.scss";

const API = 'http://localhost:3000/initalState';

const App = () => {
 
 const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
          {initialState.mylist.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzivideo">
        <Carousel>
        {initialState.originals.map(item => 
            <CarouselItem key={item.id} {...item} />
        )}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
