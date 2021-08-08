import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Footer } from '../components/Footer';
import { Category } from '../components/Category';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';

import { useInitialState } from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

export const App = () => {

    const initialState = useInitialState(API);

    return (
        <div className="App">
            <Header />
            <Search />
            {initialState?.milyst?.length > 0 &&
                <Category title="Mi lista">
                    <Carousel>
                        {initialState[milyst].map(item =>
                            <CarouselItem key={item.key} {...item} />
                        )}
                    </Carousel>
                </Category>
            }
            <Category title="Tendencias">
                <Carousel >
                    {initialState?.trends?.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Category>
            <Category title="Originales de Platzi Videos">
                <Carousel >
                    {initialState?.originals?.map(item => <CarouselItem key={item.id} {...item} />)}
                </Carousel>
            </Category>
            <Footer />
        </div>
    )
}

