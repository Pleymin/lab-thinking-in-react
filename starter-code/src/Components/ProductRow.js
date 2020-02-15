import React from 'react'

class ProductRow extends React.Component {

    render() {
        var DivStyle ={};
        if(!this.props.product.stocked){
            DivStyle = {
                color: "red"
            } 
        }
        return (
            <tr className="Product-Table" >
                <td style={DivStyle}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>        
            </tr>
        )
    }
}

export default ProductRow