import React, { Children } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Carrusel.scss';

export const Carousel = ({ children }) => {
    return (

        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>

    )
}