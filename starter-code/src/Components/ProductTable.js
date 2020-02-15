import React from 'react'
import ProductRow from './ProductRow.js'

class ProductTable extends React.Component {

    render() {
        return (
            <div className="ProductTable">
                <table className="TableList">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {this.props.show ?     
                        this.props.listProducts
                        .filter(el => el.stocked)
                        .filter(el => el.name.toUpperCase().includes(this.props.query.toUpperCase()))
                        .map((el,index) => {
                            return <ProductRow key={index} product = {el}/>
                        }) 
                        : 
                        this.props.listProducts
                        .filter(el => el.name.toUpperCase().includes(this.props.query.toUpperCase()))
                        .map((el,index) => {
                            return <ProductRow key={index} product = {el}/>
                        })}
                </table>
                

            </div>
        )
    }
}

export default ProductTable