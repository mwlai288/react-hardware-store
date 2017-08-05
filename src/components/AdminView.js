import React, {Component} from 'react';

import ProductList from'./ProductList'
import ProductForm from './ProductForm';

class AdminView extends Component {
    
    render() {
        const productList = this.props.productList
       
        return(
            <div>
                <h1>Admin View</h1>

                <h2>Products</h2>
                <ProductList 
                        productList={productList}
                        deleteProduct={this.props.deleteProduct}
                        viewMode={'ADMIN'}
                        showAdminOptions={true}/>

                <h2>Create new product</h2>
                <ProductForm
                addNewProductToProductList={this.props.addNewProductToProductList}/>
            </div>

        );
    }
}

export default AdminView;