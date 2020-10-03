
// import Axios from "axios";
// // import React from "react";
// import { useEffect, useState } from "react";
// // import DataService from "../services/DataService";
// // import "./InfiniteScroll.css";

// export default function InfiniteScroll(query, pageNumber) {
//     useEffect(() => {
//         Axios({
//             method: "GET",
//             url: "https://socialapp-api.herokuapp.com",
//             params: {},
//         }).then((response) => {
//             response.data;
//         });
//     }, [query, pageNumber]);
//     return null;
// }

// // https://youtu.be/NZKUirTtxcg    Infinite Scrolling With React - Tutorial by Web Dev Simplified











// // import React from "react";

// // // import InfiniteScroll from 'react-infinite-scroll-component';

// // class InfiniteScroll extends Component {

// //   constructor() {
// //     super();
// //     this.state = {
// //       photos: [],
// //       loading: false,
// //       page: 0,
// //       prevY: 0
// //     };
// //   }

// //   render() {
// //     <InfiniteScroll
// //         dataLength={this.state.items.length}
// //         next={this.fetchMoreData}
// //         hasMore={true}
// //         loader={<h4>Loading...</h4>}
// //         endMessage={
// //             <p style={{ textAlign: 'center'}}>
// //               <b>This is the end</b>
// //             </p>
// //           }
// //           refreshFunction={this.refresh}
// //           pullDownToRefresh
// //           pullDownToRefreshThreshold={50}
// //           pullDownToRefreshContent={
// //             <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
// //           }
// //           releaseToRefreshContent={
// //             <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
// //           }
// //         >
// //           {items}


// //       </InfiniteScroll>
// //   };
// // }

// // export default InfiniteScroll;