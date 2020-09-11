import React from "react";
import DataService from "../../DataService"
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import { Card } from 'antd';


class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.client = new DataService;
    }

    render() {
        const { loading, error } = this.props;
        let feedData = this.client.getFeed(100, 0)
        let feedDataString = JSON.stringify(feedData)

        return (
            <div className="Feed">

                <div className="site-card-border-less-wrapper">
                    <Card title="Feed Box" bordered={false} style={{ width: 300 }}>
                        <p></p>
                        <p>{feedDataString}</p>
                        <p>Card content</p>
                    </Card>
                </div>
                



                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}


export default withAsyncAction("auth", "login")(Feed);