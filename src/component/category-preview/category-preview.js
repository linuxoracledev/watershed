import React from "react";
import CategoryItem from "./category-items.components";
import './category-preview.scss';

const CategoryPreview = ({ title, items }) => (

    <div className="category-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => (idx < 4)).map(({ id, ...CategoryItemProps }) => (
                    <CategoryItem key={id} {...CategoryItemProps} />
                ))
            }
        </div>
    </div>
);
export default CategoryPreview;