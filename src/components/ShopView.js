import React, {Component} from 'react';

import ProductList from'./ProductList'

class ShopView extends Component {
    render() {
        const productList = this.props.productList
        return(
            <div>
                <h1>Shop View</h1>

                <h2>Products</h2>
                <ProductList 
                            productList={productList}
                            viewMode= {'SHOP'} />

                
            </div>

        );
    }
}

export default ShopView;