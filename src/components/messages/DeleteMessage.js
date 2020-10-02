import React from "react"
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';


class DeleteMessage extends React.Component {
    render() { 
        return (
            <div>
               
                <Button color="primary"type="submit">Delete Post!</Button>
            
            </div>

        );
    }
}
 
export default DeleteMessage;