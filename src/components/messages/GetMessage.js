import React from "react";
import MessageService from "./MessageService"
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';


class GetMessage extends React.Component {
    constructor(props) {
        super(props)
        this.client = new MessageService()
        this.state = { id: null}
    }

    handleSearch = e => {
        e.preventDefault();
        this.client.getMessage(this.state).then(response => {
            console.log(response.data)
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() { 
        return (
            <div className="searchMessage">
                
                <form id="search-message" onSubmit={this.handleSearch}>
                <label htmlFor="id">Search For Post:</label>
                <input 
                type="number"
                name="id"
                onChange={this.handleChange}
                />
                <Button color="secondary" type="submit">Search!</Button>
                </form>
                
            </div>
        );
    }
}
 
export default GetMessage;