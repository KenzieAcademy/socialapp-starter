import React from 'react'
import DataService from '../../dataService';
import { userIsAuthenticated } from "../../redux/HOCs";

class DeleteMessage extends React.Component {
    constructor(props) {
        super(props)
        this.client = new DataService
        this.state = {
            id: null
        }
    }



    render() {
        return (
            <div className='DeleteMessage'>
                <button type='submit'>Delete message</button>
            </div>
        )
    }
}

export default userIsAuthenticated(DeleteMessage)

