import React from 'react';
import './Catalog.css';


class Catalog extends React.Component {
    render() {
        let title = "The Catalog of today " + new Date().toDateString();
        return <div><h2>{title}</h2></div>;
    }
}

export default Catalog;