import React from "react";
import DataService from "../../pages/dataService"
class AboutMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = { about: "" };
        this.client = new DataService()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ about: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.client.userUpdate(this.state).then(res => { console.log(res) })

    }

    render() {
        return (
            <div className="AboutMe">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        About Me:
          <textarea
                            type="text"
                            value={this.state.about}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AboutMe;