import React from 'react'
import Search from './SearchBar.js'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    
    state = {
        query:"",
        showStock: false
    }

    updateQuery = (e) => {
        this.setState({
            query:e
        })
    }

    showStock = () => {
        var test = this.state.showStock
        this.setState({
            showStock: !test
        })
    }

    render() {
        return (
            <div className="filterableProductTable">
                <h1>IronStore</h1>
                <Search addQuery={this.updateQuery}/>
                <div>
                    <input className="btn-Checkbox"
                        type="checkbox"
                        onClick={this.showStock}>
                    </input>
                    <label>Only show products in stock</label>
                </div> 
                <ProductTable show={this.state.showStock} query={this.state.query} listProducts={this.props.products.data}/>
            </div>
        )
    }
}

export default FilterableProductTable