// import React from "react";

// import InfiniteScroll from 'react-infinite-scroll-component';



// <div
//     id="scrollableDiv"
//     style={{
//         height: 300,
//         overflow: 'auto',
//         display: 'flex',
//         flexDirection: 'column-reverse',
//     }}
// >
//     {/*Put the scroll bar always on the bottom*/}
//     <InfiniteScroll
//         dataLength={this.state.items.length}
//         next={this.fetchMoreData}
//         style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
//         inverse={true} //
//         hasMore={true}
//         loader={<h4>Loading...</h4>}
//         scrollableTarget="scrollableDiv"
//     >
//         {this.state.items.map((_, index) => (
//             <div style={style} key={index}>
//                 div - #{index}
//             </div>
//         ))}
//     </InfiniteScroll>
// </div>


// // import Axios from "axios";
// // import { useEffect, useState } from "react";
// // import Dataservice from "../services/DataService";
// // import "./InfiniteScroll.css";

// // export default function InfiniteScroll(query, pageNumber) {
// //     useEffect(() => {
// //         effect
// //         Axios({
// //             method: "GET",
// //             url: "https://socialapp-api.herokuapp.com",
// //             params: {},
// //         }).then((response) => {
// //             response.data;
// //         })
// //     }, [query, pageNumber]);
// //     return null;

// // }
