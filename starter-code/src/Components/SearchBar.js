import React from 'react'

class Search extends React.Component {
    
    state = {
        query: ''
    }

    ChangeMethod = (event) => {
        let value = event.target.value
        this.setState({
            query: value
        })
       this.props.addQuery(value)
    }

    render() {
        const {firstQuery} = this.state;
        return (
            <div className="SearchBar">
                Search
                <br/>
                <input
                className="btn-SearchBar"
                type="text" 
                placeholder="Type text..."
                onChange={this.ChangeMethod}
                value={this.state.query}
                />
            </div>
        )
    }
}

export default Search