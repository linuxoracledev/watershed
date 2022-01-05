import React from "react";
import SHOP_DATA from "./category.data";
import CategoryPreview from "../../component/category-preview/category-preview";

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { categoryData: SHOP_DATA }

    }

    render() {
        const { categoryData } = this.state;
        return (
            <div>
                {
                    categoryData.map(({ id, ...categoriesProps }) => (

                        <CategoryPreview key={id} {...categoriesProps} />
                    ))
                }
            </div>
        )
    }

}


export default CategoryPage;