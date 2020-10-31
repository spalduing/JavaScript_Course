import React from 'react';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx'
import Carousel  from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem'; 
import '../assets/styles/App.scss';


const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Categories>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>
        
    </div>
);

export default App; 