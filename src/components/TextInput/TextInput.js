import React from "react"
import QuestboardService from "../servicesPage/ServicePage"
import "./TextInput.css"
import { Button, Input, notification } from 'antd';


class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
        this.client = new QuestboardService();
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const textarea = event.target.getElementsByTagName("textarea")[0];
        const text = textarea.value;

        this.client.PostMesage(text).then(() => {
            textarea.value = "";
            notification.success({
                message: 'Passed Pursuasion Check',
                description: 'Message Posted'
            });
        });
    }

    onTextareaChange = (event) => {
        if (event.which === 13 && !event.shiftKey) {
            var formSubmit = new CustomEvent("submit", {
                target: event.target.form
            });
            event.target.form.dispatchEvent(formSubmit);
            event.preventDefault();
        }
    }

    render() {
        const { TextArea } = Input;
        return (
            <div id="inputTextBorderBox">
                <div id="testing1">Your Text Here</div>

                <form onSubmit={this.onFormSubmit}>
                    <TextArea
                        id="feedMessageInput"
                        name="input1"
                        placeholder="Your Text Here..."
                        onKeyPress={this.onTextareaChange}
                    />

                    <Button
                        id="TextSubmitButton"
                        htmlType="submit"
                    >
                        Submit
                        </Button>
                </form>
            </div>

        );

    }
}
export default TextInput