import React from "react";

const CategoryPreview = ({ title, items }) => (

    <div>
        <h1>{title}</h1>
        <div>
            {
                items.map(item => (
                    <div key={item.id}> {item.name}</div>
                ))
            }
        </div>
    </div>
);
export default CategoryPreview;