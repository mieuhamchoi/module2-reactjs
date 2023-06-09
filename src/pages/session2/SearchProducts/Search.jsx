import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inforSearch: ""
        };
    }
  render() {
    return (
        <div className="d-flex" role="search">
            <input
                onChange={(event) => {
                    this.setState({
                        inforSearch: event.target.value
                    })
                }}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button onClick={() => {
                this.props.handleSearch(this.state.inforSearch)
            }} className="btn btn-outline-success" type="submit">
                Search
            </button>
        </div>
    )
  }
}
