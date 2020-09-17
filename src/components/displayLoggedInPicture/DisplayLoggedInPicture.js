import React from "react";
import GetLoggedInUserPictureService from "../../services/GetLoggedInUserPictureService";
import { Placeholder } from "semantic-ui-react";
import "./DisplayLoggedInPicture.css";

class DisplayLoggedInPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBinary: null,
    };

    this.GetLoggedInUserPicture = new GetLoggedInUserPictureService();
  }

  componentDidMount = (event) => {
    this.GetLoggedInUserPicture.GetLoggedInUserPicture().then((result) => {
      this.setState({
        imageBinary: result.data,
      });
    });
  };

  render() {
    if (this.state.imageBinary) {
      return (
        <div className="DisplayLoggedInPicture">
          <img src={this.state.imageBinary} alt="Profile Picture" />
        </div>
      );
    }

    return (
      <div className="DisplayLoggedInPicture">
        <Placeholder style={{ height: 150, width: 150 }}>
          <Placeholder.Image />
        </Placeholder>
      </div>
    );
  }
}

export default DisplayLoggedInPicture;
