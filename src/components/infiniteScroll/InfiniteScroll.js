import React from "react";

// import InfiniteScroll form 'react-infinite-scroll-component';

class InfiniteScroll extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
      page: 0,
      prevY: 0
    };
  }

  render() {
    <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        endMessage={
            <p style={{ textAlign: 'center'}}>
              <b>This is the end</b>
            </p>
          }

        {this.state.items.map((i, index) => (
        <div style={style} key={index}>
          div - #{index}
        </div>
        ))}
      </InfiniteScroll>
  };
}

export default InfiniteScroll;