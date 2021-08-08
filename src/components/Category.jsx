import React from 'react'
import '../assets/styles/components/Category.scss'

export const Category = ({children, title}) => {
    return (
        <div className="categories">
            <h3 className="categories__title">{title}</h3>
            {children}
        </div>
    )
}
