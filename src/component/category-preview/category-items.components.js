import React from "react";
import './category-items.styles.scss';

const CategoryItem = ( {name, price, imageUrl}) => (
    <div className="category-item">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="category-footer">
            <span className="name"> {name}</span>
            <span className="price"> {price}</span>

        </div>

    </div>
);

export default CategoryItem;

