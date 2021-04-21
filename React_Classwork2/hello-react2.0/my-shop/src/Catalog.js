import React from 'react';
import ProductList from './ProductList';



class Catalog extends React.Component {
    render() {
        let title = "The Catalog " + new Date().toDateString();
        return ( 
            <div className="catalog-style">
            <h2>Catalog</h2>
            <ProductList/ >
            </div>
        );
    }
}

export default Catalog;