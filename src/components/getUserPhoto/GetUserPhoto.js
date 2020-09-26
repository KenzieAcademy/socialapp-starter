import React from "react";
import DataService from "../../DataService";
import NoDisplayPhoto from "../../assests/nodisplayphoto.png";

class GetUserPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: "",
      hasImage: false,
    };
    this.client = new DataService();
  }
  componentDidMount() {
    this.client.getUserPhoto(this.props.username).then((result) => {
      console.log(result);
      this.setState({ imgSrc: result.config.url, hasImage: true });
    });
  }
  render() {
    if (!this.hasImage) {
      return (
        <div>
          <h2>photo</h2>
          <img src={this.state.imgSrc} alt={"userphoto"} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>photo</h2>
          <img src={NoDisplayPhoto} alt={"userphoto"} />
        </div>
      );
    }
  }
}

export default GetUserPhoto;
