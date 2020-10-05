import React from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { withAsyncAction } from "../../redux/HOCs";
import socialAppService from "../../socialAppService";

class Message extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: "",
            message: "",

        }
        this.client = new socialAppService()
    }
    handlePostMessage = e => {
        e.preventDefault();
        this.props.message(this.state);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return <Comment.Group>
            <Header as="h3" dividing>
                Comments
    </Header>

            <Form reply>
                <Form.TextArea />
                <Button content="Add Reply" labelPosition="left" icon="edit" primary />
            </Form>
        </Comment.Group>
    }
}

export default withAsyncAction("auth", "login")(Message);
