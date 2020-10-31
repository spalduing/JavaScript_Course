import React from 'react';
import Header from '../components/Header.jsx';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx'
import Carousel  from '../components/Carousel.jsx';
import Footer from '../components/Footer.jsx';
import CarouselItem from '../components/CarouselItem'; 
import '../assets/styles/App.scss';


const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Categories title="Mi Lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Originales de Platzivideo"> 
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Footer />
        
    </div>
);

export default App; 