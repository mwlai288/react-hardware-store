import React, {Component} from 'react';

import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';

class HomePage extends Component {

   constructor() {
        super();

       this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: false,
            showAdminView: false,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Its a hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Its a nail',
                    price: 0.12,
                }
            ],
                cartList: [],
        };
    }
    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    };

    _toggleAdminView = () => {
        const showAdminView =!this.state.showAdminView;
        this.setState({showAdminView});
    };

    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;

       this.setState({itemCurrentlyOnSale});
    };
    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };
    _deleteProduct = (deleteProduct) => {
        const productList = [...this.state.productList];
        productList.splice(deleteProduct, 1);
        this.setState({productList});
    };

    _addProductToCart = (index) => {
    const product = {...this.state.productList[index]};
    const cartList = [...this.state.cartList];
    cartList.push(product);
    this.setState({cartList});
  };

    _removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList];
        cartList.splice(index, 1);
        this.setState({cartList});
    };

   render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
                    <span> <button onClick={this._toggleEditSaleItem}> {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}</button></span>
                    <div>
                        {
                            this.state.editSaleItem ?
                                <div>
                                    <input
                                        onChange={this._handleItemCurrentlyOnSaleChange}
                                        value={this.state.itemCurrentlyOnSale}
                                        type="text"
                                    />
                                </div>
                                : null
                        }

                    <div>
                            <button onClick={this._toggleAdminView}>
                                {this.state.showAdminView ? 
                                'Show Admin View' : 
                                'Show Shop View'}
                            </button>
                    </div>        
                        
                        
                        
            </div>

                       <AdminView
                            productList={this.state.productList}
                            addNewProductToProductList={this._addNewProductToProductList}
                            deleteProduct={this._deleteProduct}/>


                       <ShopView
                            productList={this.state.productList}/>     
                  
                       <CartView
                            productList={this.state.cartList}/>
                   </div>
            

            
         
               </div>

        

       );
    }
}

export default HomePage;