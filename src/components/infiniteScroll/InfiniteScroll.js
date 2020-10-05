// // import React from "react";

// // import InfiniteScroll from 'react-infinite-scroll-component';

// class ScrollBar extends React.Component {

// //   constructor() {
// //     super();
// //     this.state = {
// //       photos: [],
// //       loading: false,
// //       page: 0,
// //       prevY: 0
// //     };
// //   }

//   render() {
//     return (

//     <InfiniteScroll
//         dataLength={this.state.items.length}
//         next={this.fetchMoreData}
//         hasMore={true}
//         loader={<h4>Loading...</h4>}
//         endMessage={
//             <p style={{ textAlign: 'center'}}>
//               <b>This is the end</b>
//             </p>
//           }
//           refreshFunction={this.refresh}
//           pullDownToRefresh
//           pullDownToRefreshThreshold={50}
//           pullDownToRefreshContent={
//             <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//           }
//           releaseToRefreshContent={
//             <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//           }
//         >
//           {/* {items} */}


//       </InfiniteScroll>
//     )};
// }

// export default ScrollBar;
