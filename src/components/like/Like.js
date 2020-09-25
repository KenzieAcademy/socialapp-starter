import React from "react";
import DataService from "../../DataService"
import Spinner from "react-spinkit";
import {LikeFilled  }from '@ant-design/icons'



class PostLike extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
      };
     
         this.client = new DataService ();
         
    }
    

    handleLike = (e) => {
      e.preventDefault();
      this.client.postLike(this.state).then((result) => {
        console.log(result.data);
      });
    }; 
    // incrementLike = (e) => {
    //   let newCount = this.state.count + 1;
    //   this.setState({
    //     count: newCount,
    //   });
    // }; 
 
 



  render() {
    const { loading, error } = this.props;

    
    return (
    
 
      
      <div className="Message">
       
        
        
        
          {/* <button  className='post-msj-btn' type="submit" >
            like
          </button> */}
          <LikeFilled className='lik-button' onClick={this.handleLike}/>

        
        
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );}
  
}

export default (PostLike);

