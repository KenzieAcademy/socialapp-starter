import React from "react";
import DataService from "../../DataService";
import UserCard from "../userCard/UserCard";

class GetUserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [{ username: "", displayName: "", about: "" }],
      loading: false,
      userNumber: 0,
      limit: 2,
      offset: 0,
      prevVert: 0,
      photoOnlyMode: false,
      limitAmount: 10,
    };
    this.client = new DataService();
  }

  componentDidMount() {
    this.client
      .getUserList(this.state.limit, this.state.offset)
      .then((result) => {
        this.setState({ users: result.data.users });
        console.log(this.state);
      });

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevVert > y) {
      const lastOffset = this.state.users.length;
      const curOffset = lastOffset + this.state.offset;
      this.setState({ loading: true });
      this.client.getUserList(this.state.limit, curOffset).then((response) => {
        response.data.users.forEach((userObj) => {
          this.state.users.push(userObj);
        });
        this.setState({ loading: false });
      });
      this.setState({ offset: curOffset });
    }
    this.setState({ prevVert: y });
  }

  handlePhotoMode = () => {
    this.setState({ loading: true });
    this.setState((state) => {
      return {
        photoOnlyMode: !state.photoOnlyMode,
        limit: 30,
      };
    });
  };

  render() {
    if (this.state.photoOnlyMode) {
      return (
        <div className="getUserList">
          <button onClick={this.handlePhotoMode}>BOOOOOM</button>
          <div>
            {this.state.users
              .filter((userObj) => userObj.pictureLocation !== null)
              .map((userObj) => (
                <UserCard {...userObj} />
              ))}
          </div>
          <div ref={(loadingRef) => (this.loadingRef = loadingRef)}>
            <span>Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <div className="getUserList">
        <button onClick={this.handlePhotoMode}>BOOOOOM</button>
        <div>
          {this.state.users.map((userObj) => (
            <UserCard {...userObj} />
          ))}
        </div>
        <div ref={(loadingRef) => (this.loadingRef = loadingRef)}>
          <span>Loading...</span>
        </div>
      </div>
    );
  }
}

export default GetUserList;
