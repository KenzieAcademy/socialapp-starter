import React from "react";
import DataService from "../../services/dataService";
import Users from "../users/Users";
import InfiniteScroll from "react-infinite-scroller";

class UserList extends React.Component {
    state = { 
        users: [],
        hasMoreItems: true,
        nextHref: null
    };
        componentDidMount() {
        new DataService().getUsers().then(users => {
            this.setState({ users })
        })
    }

    render() {
        if (this.state.users.length === 0) {
            return (
                <div className="ListOfUsers">

                    <h1>Current Users</h1>
                    <h3>loading...</h3>
                </div>
            )
        }
        return (
            <div className="ListOfUsers">
                <h1>Current List of Super Friends:</h1>
                <ul>
                    {this.state.users.map(users => {
                        return <Users key={users.username}{...users} />
                    })}
                </ul>

                <InfiniteScroll
                    pageStart={0}
                    loadMore={Users}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {Users}
                </InfiniteScroll>
            </div>
        )
    }
}

export default UserList;
